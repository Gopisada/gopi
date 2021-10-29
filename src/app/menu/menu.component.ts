import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  menuPanel=true;
  listofItems=[{"arraylist":"DaSHBOARD"},{"arraylist":"Profile"},{"arraylist":"GOTO"}]


  ngOnInit(): void {
  }
  closeMenu():any{
    this.menuPanel=false;
  }
}
