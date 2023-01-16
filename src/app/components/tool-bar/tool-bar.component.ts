import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Output() openNotification = new EventEmitter();
  public showNotification : boolean = false;

  @Output() openAddModal = new EventEmitter();
  public showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public openNotificationBar(): void{
    this.showNotification = !this.showNotification;
    console.log('dato que se va a emitir:', this.showNotification)
    this.openNotification.emit(this.showNotification);
  }

  public openModal(): void{
    this.showModal = !this.showModal;
    this.openAddModal.emit(this.showModal);
  }
}
