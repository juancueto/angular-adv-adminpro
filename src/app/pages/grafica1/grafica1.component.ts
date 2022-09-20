import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  labels: string[] = [ 'Download Sales 1', 'In-Store Sales 1', 'Mail-Order Sales 1' ];
  data: number[]= [ 10, 15, 40 ];
  constructor() { }

  ngOnInit(): void {
  }

}
