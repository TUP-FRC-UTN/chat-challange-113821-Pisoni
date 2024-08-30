import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatboxComponent {
  //nombre
  @Input() nombre:string='';
  //mensaje
  mensaje : string ='';
  //evento con el boton
  @Output() enviarMensaje = new EventEmitter<string>;

  envioMensaje(){
    this.enviarMensaje.emit(this.mensaje = this.nombre + this.mensaje)
    this.mensaje="";
  }

}
