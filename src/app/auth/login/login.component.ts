import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastClose, HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { token } from 'src/app/file/constant';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any

  constructor(private authService:AuthService,private toast:HotToastService,private router:Router,private route:ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      const data=params // Access the passed variables
      console.log(data);
    });
  }
  ngOnInit(){
     this.loginForm=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.email]),
        pass:new FormControl('',[Validators.required,  Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),Validators.minLength(8)])
     })
   }

   showErrors=false;
   login(){
    if(this.loginForm.valid){
      const { email, pass} = this.loginForm.value
      this.authService.login(email, pass).pipe(
        this.toast.observe({
          loading: 'Please wait...',
          success: 'Login successful!',
          error: 'Invalid details...',
        })
      ).subscribe(
        (res:any)=>{
          console.log("====>",res)
          this.loginForm.reset();
          localStorage.setItem("token",token)
          console.log(res);
          this.router.navigate(['/home'],{queryParams:{firstname:res.firstname}});
        }
      );
    }else{
      this.showErrors=true;
    }
 }
 get email(){
  return this.loginForm.get('email');
 }
 get pass(){
  return this.loginForm.get('pass');
 }
 visible = true;
   changetype =true;
 
   viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
   }

}
