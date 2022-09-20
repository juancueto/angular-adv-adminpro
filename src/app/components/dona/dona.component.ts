import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  
  @Input('title') titulo: string = 'Sin titulo';
  @Input() data: number[]= [ 350, 450, 100 ];
  // @Input() labels: string[] = [];
  colors = [
    // '#9E120E', '#FF5800', '#FFB414'
    '#6857E6', '#009FEE', '#F02059'
  ];

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.data, //[ 350, 450, 100 ],
          backgroundColor: this.colors,
        }
      ]
    };
  }
}
