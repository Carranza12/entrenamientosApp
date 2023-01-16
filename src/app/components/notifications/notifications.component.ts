import { Component, Input, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public trainings:any[] = [];

  @Input() isShowNotificationBar : boolean = false;

  constructor( public _db:BdService) { }

  ngOnInit(): void {
    this.trainings = this._db.getEntrenamientos();
  }

}
