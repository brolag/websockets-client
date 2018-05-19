import { Component } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent {

  private message = {
    author: '',
    message: ''
  };

  constructor(private chatService: ChatService) { }

  sendMsg() {
    this.chatService.sendMessage(this.message);
    this.message.message = '';
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.sendMsg();
    }
  }

}
