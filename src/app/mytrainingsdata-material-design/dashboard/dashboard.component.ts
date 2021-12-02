import { Component, OnInit, ViewChild } from '@angular/core';


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

  //pichart properties
   pieChartData: any;
   pieChartOptions: any;



   constructor(private breakpointObserver: BreakpointObserver) {
      this.pieChartData = {
            labels: ['Bike', 'Run', 'Swim', 'other'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [80, 15, 5, 2],
                    backgroundColor: [
                      '#7886cb',
                      '#63b6f6',
                      '#4db6ac',
                      '#81c784',
                    ]
                },
            ]
        }
        this.pieChartOptions = {
          title: {
              display: true,
              text: 'My Title',
              fontSize: 16
          },
          legend: {
              position: 'bottom'
          }
      };

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
          console.log('Xl')
        }
      }
    });

  }




}

