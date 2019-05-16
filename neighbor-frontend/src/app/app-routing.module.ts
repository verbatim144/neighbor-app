import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NeighborsListComponent} from './neighbors-list/neighbors-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: NeighborsListComponent},

];


export const routing = RouterModule.forRoot(routes) ;
