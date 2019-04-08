import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateNeighborComponent } from './create-neighbor/create-neighbor.component';
import { NeighborDetailsComponent } from './neighbor-details/neighbor-details.component';
import { NeighborListComponent } from './neighbor-list/neighbor-list.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNeighborComponent,
    NeighborDetailsComponent,
    NeighborListComponent,
    UserComponent
  ],
  imports: [
    HttpClient,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
