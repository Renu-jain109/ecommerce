import { HttpClient } from '@angular/common/http';
import { EventEmitter, inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, SignUp } from '../interface/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }
  router = inject(Router);
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLogginError = new EventEmitter<boolean>(false)

  userSignUp(data: SignUp) {
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result) => {
      // console.log(result);
      if(result){
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['/seller-home']);
  
      }
      
    });
  };
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/seller-home']);

    }
  };

  userLogin(data:Login){
    // console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.log('User logged in');
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['/seller-home']);
        window.location.reload();
  
      }else{
        console.log('logged in failed');
        this.isLogginError.emit(false);
        
      }
      
    })
    

  }
}
