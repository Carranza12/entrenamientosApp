import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  public entrenamientos:any = [];

  constructor() { }

  public setEntrenamiento(training:any):void{
    this.entrenamientos.push(training);
  }

  public getEntrenamientos():any[]{
    return this.entrenamientos;
  }
  
}
