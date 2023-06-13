import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { token } from 'src/app/file/constant';
import { AuthService } from 'src/app/services/auth.service';
import { Images } from 'src/app/file/constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  token:any;
  users=Images.UsersImage
  constructor(private router:Router,private route:ActivatedRoute){
    this.token=localStorage.getItem("token");
  }
  name:string='';
  obj:any={};
  ngOnInit(){
     this.route.queryParams.subscribe(params => {
      const data=params // Access the passed variables
      //console.log(data);
      for (const [key, value] of Object.entries(data)) {
        this.name+=value //"a 5", "b 7", "c 9"
      }
    });
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/auth/login'])
  }
  signout(){
    localStorage.removeItem("token");
    this.router.navigate(['/auth/signUp'])
  }
  goToLogin(){
    this.router.navigate(['/auth/login'])
  }
  goToSignUp(){
    this.router.navigate(['/auth/signUp'])
  }
}
