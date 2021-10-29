import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter  Component  Works!
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
private counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
this.counter++
  }
  decrement(){
    this.counter--
  }

}
