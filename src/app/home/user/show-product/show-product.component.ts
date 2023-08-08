import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent {
  selected = 0;
	hovered = 0;
  constructor(private router:Router,private route:ActivatedRoute){}
  product:any={}
  arrayProduct:any=[]
  average=0;
  sum=0;

  ngOnInit(){
     this.route.queryParams.subscribe((data)=>{
      console.log(data)
      const decodedArray = JSON.parse(decodeURIComponent(data['reviewsList']))
      console.log(decodedArray)
      this.product=data
      this.arrayProduct=decodedArray
      for(let i in this.arrayProduct){
           this.sum+=this.arrayProduct[i].rating*1
           this.average=this.sum/this.arrayProduct.length
         }
   })
  }

  show=false;
  openAddReview(){
     this.show=!this.show
  }
}
