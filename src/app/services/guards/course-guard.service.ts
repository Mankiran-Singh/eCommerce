import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGuardService {

  constructor(private router:Router,private authService:AuthService) { }
  canActivate()
  {
     let admin=localStorage.getItem("admin")
     if(admin){
        return true;
     }else{
       this.router.navigate(['/home'])
       return false;
     }
  }  
}
