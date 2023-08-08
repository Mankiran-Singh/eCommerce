import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
   token:any;
   constructor(private authService:AuthService){
      this.token=localStorage.getItem('token')
   }

   arrayProduct:any=[]
   ngOnInit(){
    this.authService.getAllReviews().subscribe((res)=>{
      console.log(res)
        this.arrayProduct=res
    })
   }

   deleteReview(id:any){
      this.authService.deleteReview(id).subscribe((res)=>{
        this.authService.getAllReviews().subscribe((res)=>{
          console.log(res)
            this.arrayProduct=res
        })
      })
   }

   isApproved(id:any,data:any){
      this.authService.updateReview(id,data).subscribe((res)=>{
        this.authService.getAllReviews().subscribe((res)=>{
          console.log(res)
            this.arrayProduct=res
        })
      })
   }
}
