import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OktaAuthModule, OktaCallbackComponent, OktaAuthService } from '@okta/okta-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { MessageListComponent } from './messagelist/messagelist.component';
import { HttpClientModule } from '@angular/common/http';

const config = {
  issuer: 'https://dev-158343.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa2sycwwfuXyoi4J4x6',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config),
    HttpClientModule
  ],
  providers: [OktaAuthService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
