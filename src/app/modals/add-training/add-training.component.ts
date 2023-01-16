import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss'],
})
export class AddTrainingComponent implements OnInit {
  @Input() isShowAddModal: boolean = false;

  public trainingForm: FormGroup = new FormGroup({
    titulo: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    distancia: new FormControl('', Validators.required),
    tiempo_h: new FormControl('', Validators.required),
    tiempo_m: new FormControl('', Validators.required),
    tiempo_s: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(public _db: BdService) {}

  ngOnInit(): void {}

  public saveForm(): void {
    if (this.trainingForm.invalid) return;
    const {
      titulo,
      fecha,
      hora,
      tipo,
      distancia,
      tiempo_h,
      tiempo_m,
      tiempo_s,
      descripcion,
    } = this.trainingForm.value;
    const training = {
      titulo,
      fecha,
      hora,
      tipo,
      distancia: `${distancia} km`,
      tiempo: `${tiempo_h}:${tiempo_m}:${tiempo_s}`,
      descripcion,
    };
    this._db.setEntrenamiento(training);
    this.trainingForm.reset();
    this.isShowAddModal = !this.isShowAddModal;
  }
}
