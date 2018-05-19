import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialAppModule } from './material/ngmaterial.module';

// Components
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';

// Services
import { WebSocketService } from './services/websocket/websocket.service';
import { ChatService } from './services/chat/chat.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAppModule
  ],
  providers: [
    WebSocketService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
