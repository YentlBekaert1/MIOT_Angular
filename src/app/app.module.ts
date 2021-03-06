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

import { SimplebarAngularModule } from 'simplebar-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/stravaauth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/stravaauth.effects';

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
    SimplebarAngularModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({Authdata: AuthReducer}, {}),
    //EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
      HttpClientModule,
      SimplebarAngularModule
  ]
})
export class AppModule { }
