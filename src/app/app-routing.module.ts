import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistrictsTableComponent } from './districts-table/districts-table.component';
import { Error404Component } from './error404/error404.component';
import { StatesTableComponent } from './states-table/states-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/states_table', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'states_table',component:StatesTableComponent},
      {path: 'districts_table',component:DistrictsTableComponent},
  ]},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
