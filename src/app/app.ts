import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LogIn } from "./components/log-in/log-in";
import { Dashboard } from "./components/dashboard/dashboard";
@Component({
  selector: 'app-root',
  imports: [CardModule, ButtonModule, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TravelFlow-Dashboard');
}
