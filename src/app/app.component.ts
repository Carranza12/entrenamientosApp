import { Component } from '@angular/core';
import { BdService } from './services/bd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entrenamientos-app';
  public isShowNotificationBar : boolean = false;
  public isShowAddModal: boolean = false;

  constructor( ){}

  public recibirNotification(event: boolean):void{
    this.isShowNotificationBar = event;
    console.log('dato que se va a recibir:', this.isShowNotificationBar)
  }

  public recibirAddModal(event: boolean) : void{
    this.isShowAddModal  = event;
  }
}
