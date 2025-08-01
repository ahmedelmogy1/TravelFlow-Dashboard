import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-side-bar',
  imports: [MessageModule,CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {

  @Input() stateSideBar:boolean=true
  changeState():void{
   if(this.stateSideBar)
     this.stateSideBar=false;
    else
       this.stateSideBar=true;
  }
}
