import { Component, OnInit,ElementRef,ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit,AfterViewInit {
userlist=[];
dummyData=[];
list=[];

@ViewChild('myTable') table:ElementRef;
//@ViewChild('childCounter')child:CounterComponent;

displayedColumns=["name","age","birthdate"];


// displayedColumns: string[] = ['id', 'userId', 'title'];
  constructor(public httpsService :HttpService) { }

  ngOnInit(): void {
    this.list=[{'name':'Gopi','age':'23','birthdate':'10/1/1997'},
    {'name':'Sailesh','age':'24','birthdate':'10/1/1998'},
    {'name':'Supal','age':'25','birthdate':'10/1/1999'}]

    this.dummyData=[{'name':'Gopi','age':'23','birthdate':'10/1/1997'},
    {'name':'Sailesh','age':'24','birthdate':'10/1/1998'},
    {'name':'Supal','age':'25','birthdate':'10/1/1999'}]

    //this.gettableData(this.dummyData);
  }
  ngAfterViewInit():void{
    this.table;
    
  
    this.gettableData(this.dummyData);
  }
 
  gettableData(data:any){
     

      for(let i=0;i<data.length;i++){
        var row=`<tr>
                  <td>${data[i].name}</td>
                  <td>${data[i].age}</td>
                  <td>${data[i].birthdate}</td>
                  </tr>`
          this.table.nativeElement.innerHTML +=row;
      }
  }
  getData():any{
   
    this.httpsService.getUserlist().subscribe(data =>{
      
      this.userlist=data
    });
    this.userlist
 

  }


}
