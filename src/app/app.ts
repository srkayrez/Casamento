import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Menu } from './menu/menu';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [Menu, RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('casamento');
}
