
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
//täällä message-palvelu on julkinen, koska tämän komponentin tarkoitus
//on näyttää kaikki viestit. MessageService siis aiotaan liittää templaattiin.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
