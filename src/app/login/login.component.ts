import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    userName:['',Validators.required],
    password:['',Validators.required]
  });
  userFound=false;
  showToolbar=false;
  submitted=false;
  userName:string='';
  loginUsers=[{'userId':'abc@media.com','password':'abc123','username':'tom'},
  {'userId':'def@media.com','password':'def123','username':'dick'}]
  ngOnInit():void{
    
      
    
    
  }
  constructor(public router :Router,public fb:FormBuilder){

  }
  gotoContact():any{
    this.router.navigate(['/contact']);
  }
  gotoChild():any{
    this.router.navigate(['/home/child']);
  }
  saveForm():any{

    this.loginUsers.forEach((el)=>{

      if(this.loginForm.get('userName').value===el.userId && this.loginForm.get('password').value===el.password){
        // this.showToolbar=true;
        this.userName=el.username;
       
        console.log(this.userName)
         this.userFound=true;
      }
    
      
    })
    if(this.userFound){
      this.router.navigate(['/product']);
      this.submitted=true;
      sessionStorage.setItem('username', this.userName)
    }else{
      this.submitted=false;
    }
  
    // if(this.loginForm.get('userName').value==='admin' && this.loginForm.get('password').value==='admin'){
    //   // this.showToolbar=true;
    //   setTimeout(()=>{
    //     this.showToolbar=true;
    //   },3000)
    //   this.submitted=true;
    //     }else{
    //   this.showToolbar=false;
    // }
  }
 
}
