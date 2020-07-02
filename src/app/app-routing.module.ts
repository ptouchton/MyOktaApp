import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { MessageListComponent } from './messagelist/messagelist.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {path: 'implicit/callback', component: OktaCallbackComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'messageList', component: MessageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
