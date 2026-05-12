import { Component } from '@angular/core';
import { CountdownComponent } from "../timer/timer";

@Component({
  selector: 'app-home',
  imports: [CountdownComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  dataCasamento = new Date('2026-09-26T10:00:00'); 
}
