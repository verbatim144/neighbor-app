import {RouterModule, Routes} from '@angular/router';
import {NeighborListComponent} from './neighbor-list/neighbor-list.component';
import {CreateNeighborComponent} from './create-neighbor/create-neighbor.component';
import {NgModule} from '@angular/core';
import {UserService} from './app.service';

const routes: Routes = [
  {path: '', redirectTo: 'neighbor', pathMatch: 'full'},
  {path: 'neighbor', component: NeighborListComponent},
  {path: 'add', component: CreateNeighborComponent},
  {path: 'users', component: UserService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
