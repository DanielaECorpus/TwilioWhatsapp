import { Component, OnInit } from '@angular/core';
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

  constructor(private _service: MessageServiceService) { }

  ngOnInit() {
    
 

    this.gatos={
      name: "Leon"
    }

    //this._service.insertCat(this.gatos).subscribe(res => console.log(res.name));
    
    this.datos={
      number: "+5218721023874",
      message: "Esto es un mensaje de prueba de mensaje enviado desde angular XD"
    }
    
    this._service.enviaDatos(this.datos).subscribe(res => console.log(res.number));
    /*
    

    this._service.POST(this.datos);*/

  //console.log(this.gatos);
}


  
}
