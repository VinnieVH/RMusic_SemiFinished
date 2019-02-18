import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChartService } from '../interface';
import { IChart } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ChartService implements IChartService {
  getChart(): Observable<IChart[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
