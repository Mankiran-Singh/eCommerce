import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {
  reviewForm:any;

  @Input() pro_id:number=0;
  id:number=0;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.reviewForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      detail:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      heading:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      rating:new FormControl('',[Validators.required])
    })
    this.id=this.pro_id
  }

  showErrors=false;
  addReview(id:any){
    if(this.reviewForm.valid){
      this.authService.addReview(id,this.reviewForm.value).subscribe((res)=>{
        console.log(res)
      });
    }
    else{
      this.showErrors=true;
    }
  }

  get name(){
    return this.reviewForm.get('name')
  }
  get detail(){
    return this.reviewForm.get('detail')
  }
  get heading(){
    return this.reviewForm.get('heading')
  }
  get rating(){
    return this.reviewForm.get('rating')
  }
}
