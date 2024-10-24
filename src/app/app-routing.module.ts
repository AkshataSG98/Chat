import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './categories/chats/chats.component';
import { CallsComponent } from './categories/calls/calls.component';
import { ArchiveComponent } from './categories/archive/archive.component';
import { ContactsComponent } from './categories/contacts/contacts.component';
import { PasswordComponent } from './categories/password/password.component';

const routes: Routes = [
  // {path:'chats',component:ChatsComponent},
  // {path:'calls',component:CallsComponent},
  // {path:'archive',component:ArchiveComponent},
  // {path:'contacts',component:ContactsComponent}
  // { path : 'password',component:PasswordComponent}
  // { path:'archived',component:ArchiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
