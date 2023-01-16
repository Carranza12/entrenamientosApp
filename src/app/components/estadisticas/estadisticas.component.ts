import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadisticasComponent implements OnInit {

  public entrenamientos:any = [];
  public km_totales:number = 0;
  public actividades_totales:number = 0;

  constructor( public _db:BdService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.entrenamientos = this._db.getEntrenamientos();
    console.log(this.entrenamientos)
    //this.km_totales = this.entrenamientos.reduce((acc,act) => acc + act. )
  }

}
