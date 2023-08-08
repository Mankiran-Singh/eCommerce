import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/';

  SignUp(firstname: string| null | undefined,  lastname: string| null | undefined, email: string| null | undefined, pass: string| null | undefined,confirmPassword:string | null | undefined): Observable<any> {
    return this.http.post(
      this.url + 'users/signup',
      {
        firstname,
        lastname,
        email,
        pass,
        confirmPassword
      },
    );
  }

  login(email: string| null | undefined, pass: string| null | undefined): Observable<any> {
    return this.http.post(
      this.url + 'users/login',
      {
        email,
        pass
      },
    );
  }

  stats(){
    return this.http.get(this.url+'stats');
  }

  getProducts(){
    return this.http.get(this.url+'products');
  }
  getProductById(id:any){
    return this.http.get(`http://localhost:8080/products/${id}`);
  }

  getProductBySearch(search:any){
    return this.http.get(`http://localhost:8080/getProductBySearch/${search}`);
  }

  addReview(id:any,data:any){
     return this.http.patch(`http://localhost:8080/products/addreview/${id}`,data);
  }

  getAllReviews(){
     return this.http.get(this.url+'reviews')
  }
  
  deleteReview(id:any){
    return this.http.delete(this.url+'reviews'+`/${id}`)
  }

  updateReview(id:any,data:any){
    return this.http.patch(this.url+'reviews'+`/${id}`,data);
  }
}
