import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  messages: { user: string, text: string }[] = [];
  newMessage: string = '';
  isFavorite: boolean = false;
  showEmojiPicker: boolean = false;
  selectedContact: any = null;

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    this.newMessage += event.detail.unicode;
  }

  toggleFavorite(event: Event) {
    event.stopPropagation(); // Prevents the click event from being propagated to parent elements
    this.isFavorite = !this.isFavorite;
  }
  
  unreadCount = 5;

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ user: 'You', text: this.newMessage });
      this.newMessage = '';
    }
  }

  selectChat(contact: any) {
    this.selectedContact = contact;
    // Optionally, you can clear the messages array to simulate opening a new chat
    this.messages = [];
  }

  contacts = [
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile2.jpg', name: 'Kavya', lastMsg: 'Hello' },
    { profile: 'profile3.jpg', name: 'Ashwini', lastMsg: 'Hello' },
    { profile: 'profile4.jpg', name: 'Kishore', lastMsg: 'Hello' },
    { profile: 'profile5.jpg', name: 'Jaya', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' },
    { profile: 'profile1.jpg', name: 'Ramana', lastMsg: 'Hello' }
  ];
}
