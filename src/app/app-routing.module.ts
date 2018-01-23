import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'left', component: LeftComponent, data: { state: 'left' } },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'right', component: RightComponent, data: { state: 'right' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
