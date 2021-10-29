import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
//import { resolve } from 'dns';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit ,OnDestroy,AfterViewInit{
userName:FormControl=new FormControl()
username:string;
userLoggedin:boolean=false;
private subj :Subscription
  constructor() { }


 

  ngOnInit(): void {
    const  prom = new Promise(resolve=>{
      setTimeout(() => {
        resolve("Promise Worked corectly")
      }, 1000);
    })
    prom.then(x=>console.log(x))

    const obj =new Observable(sub=>{
    let counter:number=0;
    setInterval(()=>{
    counter=counter+1;
    sub.next(counter)
    },1000)
  
  })
    
  this.subj =obj.subscribe(result=>console.log("counter is" +result));
  }
  ngAfterViewInit():void{
    this.userLoggedin=sessionStorage.getItem('username')!=='';
    if(this.userLoggedin){
      this.username=sessionStorage.getItem('username');
    }
  }
  ngOnDestroy():void{
    this.subj.unsubscribe();
  }

}
