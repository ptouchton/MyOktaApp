import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Message {
   date: String,
   text: String
}

@Component({
  template: `
    <div *ngIf="messages.length">
      <li *ngFor="let message of messages">{{message.message}}</li>
    </div>
  `
})
export class MessageListComponent implements OnInit {
  messages: Array<Message>;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    this.messages = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
    const options = {
      headers : headers
    }
    // Make request
    this.http.get <Array<Message>>(
      'http://localhost:{serverPort}/api/messages',
      options
    )
    .pipe(
      map((messages: Array<Message>) => messages.forEach(message => this.messages.push(message)))
    );
  }
}
