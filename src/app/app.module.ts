import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';

import { MytrainingsdataMaterialDesignModule } from './mytrainingsdata-material-design/mytrainingsdata-material-design.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MytrainingsdataMaterialDesignModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
      HttpClientModule
  ]
})
export class AppModule { }
