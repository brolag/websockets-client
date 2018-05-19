import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../services/chat/chat.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  private message: Message;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.message = { author: '', message: '' };
  }

  sendMsg() {
    this.chatService.sendMessage(this.message);
    this.message.message = '';
  }
}
