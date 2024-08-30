import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatboxComponent } from './chat-box/chat-box.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ChatChallenge';
  @Input() mensajes : string []=[]

  setMensaje(msj : string){
    this.mensajes?.push(msj)
  }
}