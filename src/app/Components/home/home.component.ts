import { Component, OnInit,ViewChild } from '@angular/core';
import { MessageWhatsappComponent } from '../message-whatsapp/message-whatsapp.component';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //
 /* @ViewChild('message') childOne:MessageWhatsappComponent;
  @ViewChild('list') childTwo:MessageListComponent;*/

  constructor() { }

  ngOnInit() {

    /*this.childOne.emitEvent
    .subscribe(
      res =>
      {
      console.log("Atributo:" + res);
      debugger
      this.childTwo.dataShared = res;
      });*/
  }

 /* change():void{
    this.childOne.function1();
  }*/


}
