import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  endPointUrl='https://jsonplaceholder.typicode.com';

  constructor(public httpClient :HttpClient){

  }

 
  senddata():any{
    console.log('This Message logged');
  }
  getUserlist():any{
    return this.httpClient.get<any>(this.endPointUrl+'/posts')
  }
}
