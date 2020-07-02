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
    <p>Messages</p><br/>
    {{messages.length}}<br/>
    <div *ngIf="messages.length">
      <li *ngFor="let myMessage of messages">{{myMessage.text}}</li>
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
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    // Make request
    this.http.get<Array<Message>>(
      'http://localhost:8000/api/messages',
      { headers }
    ).pipe(map((res: any) => res.messages))
      .subscribe((myMessages: Array<Message>) => {
          myMessages.forEach(message => {
            this.messages.push(message);
          });
        }
      );
  }
}
