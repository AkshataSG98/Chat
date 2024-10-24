import { Component } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  logo?: string;
}

interface Message {
  from: string;
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  contacts: Contact[] = [
    { id: 1, name: 'Ashu' },
    { id: 2, name: 'Chintu' },
    { id: 3, name: 'Kavya' },
    { id: 4, name: 'Ramana' },
    { id: 5, name: 'Jaya' },
    { id: 6, name: 'Kishore' }
  ];

  selectedContact: Contact | null = null;
  messages: Message[] = [];  
  showEmojiPicker = false;
  isArchiveRoute = true;
  showMenu = false;

  getInitial(name: string): string {
    return name.charAt(0).toUpperCase();
  }

  selectContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  deselectContact(): void {
    this.selectedContact = null;
  }

  sendMessage(text: string): void {
    if (text.trim().length === 0) return;
    
    const message: Message = {
      from: 'Me',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.messages.push(message);
    this.showEmojiPicker = false;
  }

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(emoji: string): void {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    input.value += emoji;
    this.showEmojiPicker = false;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  // viewContact(): void {
  //   alert(Viewing contact: ${this.selectedContact?.name});
  //   this.showMenu = false;
  // }

  // blockContact(): void {
  //   alert(Blocking contact: ${this.selectedContact?.name});
  //   this.selectedContact = null;
  //   this.showMenu = false;
  // }

}
