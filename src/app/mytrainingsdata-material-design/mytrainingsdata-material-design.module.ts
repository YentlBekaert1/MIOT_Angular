import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    DashboardComponent,
    CalendarComponent
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
    LayoutModule
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    DashboardComponent,
    CalendarComponent,
    MatToolbarModule
  ]
})
export class MytrainingsdataMaterialDesignModule { }
