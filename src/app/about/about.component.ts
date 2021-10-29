import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
array=[1,2,3,4,5,6,7];
name="Gopi Sada Siva";
menupanel=false;
showcontent=false;
  constructor() { }

  ngOnInit(): void {
  }
  show():any{
    this.showcontent=true;
  }
  menuButton():any{
    this.menupanel=true;
  }
  closeMenu():any{
    this.menupanel=false;
  }
  hide():any{
    this.showcontent=false;
  }

}
