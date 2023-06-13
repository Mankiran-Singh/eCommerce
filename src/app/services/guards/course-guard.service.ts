import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseGuardService {

  constructor(private router:Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const token=localStorage.getItem("token")
    if(token){
      return true;
    }
    else{
      this.router.navigate(['auth/login'])
      return false;
    }
   }  
}
