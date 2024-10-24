import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chats';
  searchValue: string = '';
  onSearch() {
    console.log('Search:', this.searchValue);
  }
  showChats:boolean=true;
  showCalls:boolean=false;
  showPass:boolean=false;
  showContacts:boolean=false;

  showChat(){
    this.showChats=true;
    this.showCalls=false;
    this.showPass=false;
    this.showContacts=false;
  }
  showCall(){
    this.showChats=false;
    this.showCalls=true;
    this.showPass=false;
    this.showContacts=false
  }
  showPassword(){
    this.showChats=false;
    this.showCalls=false;
    this.showPass=true;
    this.showContacts=false;
  }
  showContact(){
    this.showChats=false;
    this.showCalls=false;
    this.showPass=false;
    this.showContacts=true;
  }
}
