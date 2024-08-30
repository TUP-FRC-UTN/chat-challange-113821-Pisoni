import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {
  user1Messages: { user: string, message: string }[] = [];
  user2Messages: { user: string, message: string }[] = [];

  addMessage(newMessage: { user: string, message: string }) {
    if (newMessage.user === 'Usuario 1') {
      this.user1Messages.push(newMessage);
    } else if (newMessage.user === 'Usuario 2') {
      this.user2Messages.push(newMessage);
    }
  }
}
