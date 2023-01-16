import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AddTrainingComponent } from './modals/add-training/add-training.component';
import {ReactiveFormsModule } from '@angular/forms';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component'


@NgModule({
  declarations: [
    ToolBarComponent,
    NotificationsComponent,
    AddTrainingComponent,
    EstadisticasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ToolBarComponent,
    NotificationsComponent,
    AddTrainingComponent,
    EstadisticasComponent
  ]
})
export class SharedModule { }
