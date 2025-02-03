import { CommonModule } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../interface/data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService : SellerService){}
  router = inject(Router);
  showLogin = false;
  IsError:string = "";

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

    signUp(data:SignUp):void{
      this.sellerService.userSignUp(data);
    };

    login(data:Login):void{
      this.IsError = " ";
      console.log(data);
      this.sellerService.userLogin(data);
      this.sellerService.isLogginError.subscribe((result)=>{
        if(data){
          this.IsError = "Email or password is not correct.";  
        }
  
      })
      
    };

    openLogin(){
      this.showLogin = !this.showLogin;

    }
}
