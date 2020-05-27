import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent{

  constructor(private messageService: MessageService) { }

  public clear() {
    this.messageService.clear();
  }

  public getMessages() {
    return this.messageService.messages;
  }

}
