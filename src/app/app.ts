import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from "./timer/timer";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Menu } from './menu/menu';


@Component({
  selector: 'app-root',
  standalone: true, // Garanta que isso esteja aqui se for Angular 18/19
  imports: [CountdownComponent, Menu, RouterOutlet], // Apenas uma vez
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('casamento');
  // Coloque uma data de 2025 ou 2026 para testar o contador rodando
}
