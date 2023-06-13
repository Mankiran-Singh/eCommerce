import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EventEmitterService } from 'src/app/services/events/event-emitter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  selected = 0;
	hovered = 0;
  token:any='';

  constructor(private authService:AuthService,private router:Router,private event:EventEmitterService){
    this.token=localStorage.getItem("token");
  }

   arrayProducts:any=[]
   sum=0;
   average=0;
  ngOnInit(){
     this.authService.getProducts().subscribe((res)=>{
        this.arrayProducts=res
        // for(let i in this.arrayProducts){
        //   console.log(this.arrayProducts[i].reviewsList)
        //   for(let j in this.arrayProducts[i].reviewsList){
        //    // console.log(this.arrayProducts[i].reviewsList.length)
        //     this.sum+=this.arrayProducts[i].reviewsList[j].rating*1
        //     this.average=this.sum/this.arrayProducts[i].reviewsList.length
        //   }
        //  }
     })
  }

  obj:any={}
  getById(id:any,i:any){
    this.authService.getProductById(id).subscribe((res)=>{
      this.obj=res
      const encodedArray = encodeURIComponent(JSON.stringify(this.obj.reviewsList));
      this.router.navigate(['/home/showProduct'],{queryParams:{id:this.obj.pro_id,name:this.obj.name,productCode:this.obj.productCode,
      brand:this.obj.brand,image:this.obj.image,length:this.obj.reviewsList.length,
      description:this.obj.description,price:this.obj.price,reviewsList:encodedArray}})
    })
  }

  newArray:any=[]
  reqData:any;
  @ViewChild('myInput') input:any

    ngAfterViewInit(){
      const search = fromEvent<any>(this.input.nativeElement,'keyup').pipe(
        map((event:any) =>event.target.value),
           debounceTime(1000)
        )
       search.subscribe((result:any)=>{
        result=result.toLowerCase();
          this.authService.getProducts().pipe(map((res:any)=>{
            for(const key in res){
                if(res[key].productCode.toLowerCase()==result){
                    //this.reqData=res[key].name;
                    this.authService.getProductByCode(res[key].productCode).subscribe((res)=>{
                      console.log("code ",res)
                        this.arrayProducts=res
                    })
                }
                
                if(res[key].name.toLowerCase()==result || (res[key].name.includes(result)|| result.includes(res[key].name))){
                  //this.reqData=res[key].name;
                  this.authService.getProductByName(res[key].name).subscribe((res)=>{
                    console.log("name ",res)
                      this.arrayProducts=res
                  })
                }

                if(res[key].brand.toLowerCase()==result){
                  //this.reqData=res[key].name;
                  this.authService.getProductByBrand(res[key].brand).subscribe((res)=>{
                    console.log("brand ",res)
                      this.arrayProducts=res
                  })
                }
            }
          })).subscribe((res)=>{
          })
          setTimeout(()=>{
            this.reqData=null
          },2000)
        })
    }
}