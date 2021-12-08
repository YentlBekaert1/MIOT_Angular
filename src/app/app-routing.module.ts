import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './mytrainingsdata-material-design/dashboard/dashboard.component';
import { CalendarComponent } from './mytrainingsdata-material-design/calendar/calendar.component';
import { FoodCornerComponent } from './mytrainingsdata-material-design/food-corner/food-corner.component';
import { FoodDetailComponent } from './mytrainingsdata-material-design/food-corner/food-detail/food-detail.component';
import { PerformancesComponent } from './mytrainingsdata-material-design/performances/performances.component';
import { WeatherComponent } from './mytrainingsdata-material-design/weather/weather.component';

const routes: Routes = [
  {
        path: "dashboard",
        component: DashboardComponent
  },
  {
        path: "calendar",
        component: CalendarComponent
  },
  {
        path: "foodcorner",
        component: FoodCornerComponent
  },
  {
        path: "weather",
        component: WeatherComponent
  },
  {
        path: "performances",
        component: PerformancesComponent
  },
  {
    path: 'foodcornerdetails/:id',
    component: FoodDetailComponent
  },
  {
      path: "**",
      redirectTo: "/dashboard",
      pathMatch: 'full'
  },
  {
      path: "",
      redirectTo: "/dashboard",
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
