import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageWhatsappComponent } from './Components/message-whatsapp/message-whatsapp.component';
import { InstructionsComponent } from './Components/instructions/instructions.component';
import { MessageListComponent } from './Components/message-list/message-list.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageWhatsappComponent,
    InstructionsComponent,
    MessageListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
