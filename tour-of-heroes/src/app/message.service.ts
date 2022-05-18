import { Injectable } from '@angular/core';

//määritetään, että tämä palvelu voidaan injektoida komponentteihin.
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  
  constructor() {}
//lisää parametrina annetun viestin messages-propertytaulukkoon.
  add(message: string) {
    this.messages.push(message);
  }
//tyhjentää properytaulukon.
  clear() {
    this.messages = [];
  }
}
