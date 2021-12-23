import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Activities } from '../../../strava_act';

@Component({
  selector: 'app-activitie-table',
  templateUrl: './activitie-table.component.html',
  styleUrls: ['./activitie-table.component.scss']
})
export class ActivitieTableComponent implements OnInit {

 displayedColumns: string[] = ['date', 'name', 'time', 'distance'];

 @Input() contentAct!: Activities[];

  constructor() {
   }

  ngOnInit(): void {
  }

}
