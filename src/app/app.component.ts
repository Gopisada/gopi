import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  showToolbar=true;
  
  constructor(public router : Router){

  }
  ngOnInit(): void {
  
  }
  gotoContact():any{
    this.router.navigate(['/contact']);
  }
  gotoHome():any{
    this.router.navigate(['/home']);
  }
  gotoChild():any{
    this.router.navigate(['/home/child']);
  }
  gotoAbout():any{
    
    
      this.router.navigate(['/about']);
    
    
  }
  
  
  gotoLogin():any{
    setTimeout(()=>{
           this.showToolbar=false;
        },3000)
    this.router.navigate(['/login']);
  }
 
 
}
