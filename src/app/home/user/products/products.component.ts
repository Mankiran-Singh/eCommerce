import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
   searchForm:any
  ngOnInit(){
    this.searchForm=new FormGroup({
      search:new FormControl('',[Validators.required])
    })
  }

  showErrors=false
  searching(){
     if(this.searchForm.valid){
         this.authService.getProductBySearch(this.searchForm.value.search).subscribe((res)=>{
            this.arrayProducts=res
            if(this.arrayProducts.length===0){
              alert('no product to show')
            }
         })
     }else{
        this.showErrors=true
     }
  }
 
  get search(){
    return this.searchForm.get('search')
  }
  obj:any={}
  getById(id:any,i:any){
    this.authService.getProductById(id).subscribe((res)=>{
      console.log("iewbfvhr4gl+++>",res)
      this.obj=res
      const encodedArray = encodeURIComponent(JSON.stringify(this.obj.reviewsList));
      this.router.navigate(['/home/showProduct'],{queryParams:{id:this.obj.pro_id,name:this.obj.name,productCode:this.obj.productCode,
      brand:this.obj.brand,image:this.obj.image,length:this.obj.reviewsList.length,
      description:this.obj.description,price:this.obj.price,reviewsList:encodedArray}})
    })
  }

}