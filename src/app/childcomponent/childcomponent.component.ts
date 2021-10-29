import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})

export class ChildcomponentComponent implements OnInit {
  @Input() parenttochild ;
  @Output() parentFunction : EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
     

  }
  save():any{
    this.parentFunction.emit('child component to parent component called');
  }

}
