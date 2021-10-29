import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
Mydate=new Date();
name="gopisadasivarao";
menupanel=false;
  constructor(public myservice : HttpService) { }

  ngOnInit(): void {
    this.myservice.senddata();
  }
 

}
