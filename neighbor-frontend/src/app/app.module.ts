import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateNeighborComponent } from './create-neighbor/create-neighbor.component';
import { NeighborDetailsComponent } from './neighbor-details/neighbor-details.component';
import { NeighborListComponent } from './neighbor-list/neighbor-list.component';
import { SearchNeighborComponent } from './search-neighbor/search-neighbor.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNeighborComponent,
    NeighborDetailsComponent,
    NeighborListComponent,
    SearchNeighborComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
