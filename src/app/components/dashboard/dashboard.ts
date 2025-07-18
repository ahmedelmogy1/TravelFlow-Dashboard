import { Component } from '@angular/core';
import { SideBar } from "../side-bar/side-bar";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [SideBar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
