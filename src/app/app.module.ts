import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OktaAuthModule, OktaCallbackComponent, OktaAuthService } from '@okta/okta-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';

const config = {
  issuer: 'https://dev-158343.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/people',
  clientId: '0oa2sycwwfuXyoi4J4x6',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [OktaAuthService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
