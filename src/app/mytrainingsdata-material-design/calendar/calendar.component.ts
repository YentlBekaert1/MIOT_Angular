import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg ,EventClickArg, EventApi} from '@fullcalendar/angular'; // useful for typechecking
import { INITIAL_EVENTS, createEventId } from '../utilities/event-utils';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(map((result) => result.matches));
  
  calendarOptionsFull: CalendarOptions = {
    initialEvents: INITIAL_EVENTS,
    initialView: 'dayGridMonth',
    select: this.handleDateSelect.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
   
  };
  calendarOptionsList: CalendarOptions = {
    initialEvents: INITIAL_EVENTS,
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
