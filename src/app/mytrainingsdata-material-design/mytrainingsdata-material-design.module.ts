import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FoodCornerComponent } from './food-corner/food-corner.component';
import { PerformancesComponent } from './performances/performances.component';
import { WeatherComponent } from './weather/weather.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import { FoodTableComponent } from './food-corner/food-table/food-table.component';
import { FoodFilterPipe } from './food-corner/food-filter/food-filter.pipe';
import { FoodFormComponent } from './food-corner/food-form/food-form.component';
import { FoodDetailComponent } from './food-corner/food-detail/food-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ActivitieTableComponent } from './dashboard/activitie-table/activitie-table.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    DashboardComponent,
    CalendarComponent,
    FoodCornerComponent,
    PerformancesComponent,
    WeatherComponent,
    FoodTableComponent,
    FoodFilterPipe,
    FoodFormComponent,
    FoodDetailComponent,
    UserSettingsComponent,
    ActivitieTableComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    LayoutModule,
    FullCalendarModule, // register FullCalendar with you app
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,

  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    DashboardComponent,
    CalendarComponent,
    FoodCornerComponent,
    PerformancesComponent,
    WeatherComponent,
    MatToolbarModule,
  ],
})
export class MytrainingsdataMaterialDesignModule { }
