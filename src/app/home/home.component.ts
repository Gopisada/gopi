import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit,AfterViewInit {
  name='welcome to Home darling';
  usernname="Gopi";
  empList=[{"name":"Gina Williams"},
  {"name":"Jake Williams"},
  {"name":"Jeff stewart"},
  {"name":"John Doe"},
  {"name":"Paula M.Keith"}]
  NameofEmp:String='';
  showraj="welcome to parent showraj";
  @ViewChild('Empname') emp: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.emp;
    console.log(this.emp)
  }
save():void {
  this.name="saved done"
  
}
nameSel():void{
  this.NameofEmp=this.emp.nativeElement.value;
  console.log(this.NameofEmp)
}
parentFunction(data):any{
this.name=data;
}
valchange():void{
  this.name="value changed"
}
savedthehome():any{
  this.showraj="parent to child ";
}
}
