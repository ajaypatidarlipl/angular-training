import { Injectable } from '@angular/core';

@Injectable()
// {
//   providedIn: 'root',
// }
export class MessageService {
  messages = [];

  constructor() { }

  add(message: string, message_type: string = 'success') {
    this.messages.push({
      message: message,
      message_type: message_type
    });
  }
 
  clear() {
    this.messages = [];
  }
}