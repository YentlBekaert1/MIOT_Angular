import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables} from 'chart.js'

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';


export interface activities {
  name: string;
  date: string;
  time: string;
  distance: string;
}

const ACTIVITIS_DATA: activities[] = [
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
  {date: '6/15/15, 9:03 AM', name: 'Ochtendrit', time:'1:00:00', distance: '30km'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  chart: any = [];

  //for table
  displayedColumns: string[] = ['date', 'name', 'time', 'distance'];
  dataSource = ACTIVITIS_DATA;
  clickedRows = new Set<activities>();

  //for grid layout
  cols? : number =4;
  //responsiveness gridlayout
  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 2,
    sm: 2,
    xs: 2
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    Chart.register(...registerables);
  }



  ngOnInit() {

  //for responsiveness gridlayout
  this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
          console.log('Xsmall')
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
          console.log('SM')
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
          console.log('MD')
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
          console.log('lg')
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
          console.log('Xl')
        }
      }
    });
    //chart
     this.chart = new Chart("canvas", {
      type: 'bar',
      data: {
          labels: ['Monday', 'Teusday', 'Wendsday', 'Thunderday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
              label: 'Bike',
              data: [12, 19, 0, 5, 12, 13, 0],
              backgroundColor: [
                  'rgba(92, 107, 192, 1)',
              ],
              order: 1
          },
          {
            label: 'Run',
            data: [0, 3, 0, 0, 0,0, 5],
            backgroundColor: [
                'rgba(66, 165, 245, 1)'
            ],
            order: 2
        },
        {
          label: 'Swim',
          data: [0, 0, 5, 0, 0, 0, 0],
          backgroundColor: [
              'rgba(38, 166, 153, 1)'
          ],

          order: 3
        },
        {
          label: 'other',
          data: [1, 0, 0, 1, 0, 1, 0],
          backgroundColor: [
              'rgba(101, 188, 105, 1)'
          ],

          order: 3
        }
        ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true

              }
          }
      }
  });

  }
}

