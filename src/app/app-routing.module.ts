import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './mytrainingsdata-material-design/dashboard/dashboard.component';
import { CalendarComponent } from './mytrainingsdata-material-design/calendar/calendar.component';

const routes: Routes = [
  {
        path: "dashboard",
        component: DashboardComponent
  },
  {
        path: "calendar",
        component: CalendarComponent
  },{
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
