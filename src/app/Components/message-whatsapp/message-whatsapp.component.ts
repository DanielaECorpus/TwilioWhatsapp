import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { MessageServiceService, Cat, datos } from 'src/app/services/message-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-whatsapp',
  templateUrl: './message-whatsapp.component.html',
  styleUrls: ['./message-whatsapp.component.css']
})

export class MessageWhatsappComponent implements OnInit {

  public gatos:Cat;
  public datos;

  message:string;
  number:string;
  lada:string="+521";
 // m:any;
 // messages:any[];
 // @Output() emitEvent:EventEmitter<any> = new EventEmitter<any>();
 // estado:boolean = false;

  constructor(private _service: MessageServiceService) { }

  ngOnInit() {
    //this.function1();
     /* this.gatos={
      name: "Leon"
    }*/
    //this._service.insertCat(this.gatos).subscribe(res => console.log(res.name));
    /*this._service.POST(this.datos);*/
  //console.log(this.gatos);
  //this.messages=["Hola"];
}

SendMessage(){
this.datos={
  number: this.lada+this.number,
  message: this.message}
  debugger
  this._service.enviaDatos(this.datos).subscribe(res =>
     console.log(res.number)
    );
  //this.messages.push(this.datos.message);
  //this.emitEvent.emit(this.messages);
  }

 /* public function1(): boolean{
    let fResponse = !this.estado;
    this.estado = fResponse;
    this.emitEvent.emit(fResponse);
    return fResponse;
  }*/
}
