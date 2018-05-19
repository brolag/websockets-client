import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { WebSocketService } from '../websocket/websocket.service';
import { CHAT_URL } from './chat.config';

export interface Message {
  author: string;
  message: string;
  newDate?: string;
}

@Injectable()
export class ChatService {
  public messages: Subject<Message> = new Subject<Message>();

  constructor(private wsService: WebSocketService) {
    this.messages = <Subject<Message>>this.wsService
      .connect(CHAT_URL)
      .pipe(
        map((response: MessageEvent): Message => {
          const data = JSON.parse(response.data);
          return {
            author: data.author,
            message: data.message,
            newDate: data.newDate
          };
        }));
  }

  public sendMessage(message) {
    this.messages.next(message);
  }
}

