import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Custom Angular Material';
  number = 0;
  lista = [{id: 1, nombre: 'Pepe'}, {id: 3, nombre: 'Rosario'}, {id: 2, nombre: 'Eustaquio'}, {id: 4, nombre: 'Alfonso'}, {id: 5, nombre: 'Pepe'}, {id: 6, nombre: 'Alfonso'}];

  quitarElementoLista() {
    this.lista.pop();
  }

  mostrar() {
    this.number++;
  }

  hide() {
    this.title = 'Custom Angular Material';
    this.number = 0;
  }

  cambiarTitulo() {
    this.title = '¡BOOM!';
  }
}
