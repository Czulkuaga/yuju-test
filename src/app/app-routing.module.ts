import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:InitComponent},
  { path: 'dashboard', loadChildren: () => import('./application/dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: '**', component:Error404Component , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
