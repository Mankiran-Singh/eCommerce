import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators, ValidationErrors, ValidatorFn, AbstractControl} from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { token } from 'src/app/file/constant';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
   signUpForm:any;

   constructor(private authService:AuthService,private router:Router,private toast:HotToastService){}

   ngOnInit(){
    this.signUpForm=new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      email:new FormControl('',[Validators.required, Validators.email]),
      pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl('',Validators.required)
     },{ validators: this.passwordsMatchValidator });
   }

   passwordsMatchValidator:ValidatorFn=(control:AbstractControl):ValidationErrors | null =>{
      const password=control.get('pass')?.value 
      const confirmPassword=control.get('confirmPassword')?.value   
      if(password && confirmPassword && password!==confirmPassword){
          return {
            passwordMismatch: true
          };
    }
    return null;
  }
   
   showErrors=false;
   SignUp(){
     if(this.signUpForm.valid){
     // console.log(this.signUpForm.value);
      const { firstname , lastname, email, pass, confirmPassword} = this.signUpForm.value
      this.authService.SignUp(firstname, lastname, email, pass,confirmPassword).pipe(
        this.toast.observe({
          loading: 'Please wait...',
          success: 'SignUp successful!',
          error: 'Either email already exists or Form is invalid',
        })
      ).subscribe(
        (res:any)=>{
          console.log("====>",res)
          this.signUpForm.reset();
          localStorage.setItem("token",token);
          this.router.navigate(['/auth/login']);
        }
      );
     }else{
       this.showErrors=true;
       console.log('Error')
     }
   }

  

   get firstname(){
      return this.signUpForm.get('firstname');
   }
   get lastname(){
    return this.signUpForm.get('lastname');
   }
   get email(){
    return this.signUpForm.get('email');
   }
   get pass(){
     return this.signUpForm.get('pass');
   }
   get confirmPassword(){
      return this.signUpForm.get('confirmPassword')
   }

   visible = true;
   changetype =true;
 
   viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
   }


}
