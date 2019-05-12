import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NeighborsListComponent} from './neighbors-list/neighbors-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'neighbor', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: NeighborsListComponent},

  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
