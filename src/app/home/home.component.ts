import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from '../api/fake-api/chart.service';
import { IChart } from '../api/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  charts$: Observable<IChart[]>;
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.charts$ = this.chartService.getChart();
  }

}
