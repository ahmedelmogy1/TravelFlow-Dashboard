import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [CardModule, ButtonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TravelFlow-Dashboard');
}
