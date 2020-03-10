import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { MessageListComponent } from './messagelist/messagelist.component';

const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'messageList', component: MessageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
