import { provideCloudflareLoader } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private chats = [
    { id: 1,profile:'', name: 'Ramana', messages: ['Hello', 'How are you?'] },
    { id: 2,profile:'', name: 'Kavya', messages: ['Hi', 'Good morning'] },
    { id: 3, profile:'',name:'Ashwini', messages: ['Hi', 'Nice to meet you']},
    { id: 4, profile:'', name:'Kishore', messages: ['Hello','How are you']},
    { id: 5,profile:'', name:'Jaya',messages: ['Hello','I am done']}
  ];

  // contacts=[
  //   {id:1,profile:'',name:'Ramana',lastMsg:'Hello'},
  //   {id:2,profile:'',name:'Kavya',lastMsg:'Hello'},
  //   {,lastMsg:'Hello'},
  //   {id:4,profile:'',name:'Kishore',lastMsg:'Hello'},
  //   {id:5,profile:'',name:'Jaya',lastMsg:'Hello'}
  // ];

  getChats() {
    return this.chats;
  }

  getChatMessages(chatId: number) {
    return this.chats.find(chat => chat.id === chatId)?.messages || [];
  }
}
