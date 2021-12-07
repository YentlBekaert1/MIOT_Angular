import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg ,EventClickArg, EventApi} from '@fullcalendar/angular'; // useful for typechecking
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Events} from "./events"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: Events[] = [
      {
        id: "1",
        title: 'Event 1',
        start: '2021-12-07'
      },
      {
        id: "2",
        title: 'Event 2',
        start: '2021-12-08'
      }
    ];


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(map((result) => result.matches));

  calendarOptionsFull: CalendarOptions = {
    initialEvents: this.events,
    initialView: 'dayGridMonth',
    select: this.handleDateSelect.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
   
  };
  calendarOptionsList: CalendarOptions = {
    initialEvents: this.events,
    initialView: 'listWeek',
    select: this.handleDateSelect.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
   
  };
  
  currentEvents: EventApi[] = [
  ];

  handleDateSelect(selectInfo: DateSelectArg) {
    alert('date click! ' + selectInfo)
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}
