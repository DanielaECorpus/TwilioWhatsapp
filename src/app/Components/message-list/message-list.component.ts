import { Component, OnInit,Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit,OnChanges {
 /* @Input() dataShared:any;
  messages:any[];*/
  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(){
   // this.messages=this.dataShared;
  }
  
}
