import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule, MdIconModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

import { routes } from "./routes";
import { RouterModule } from "@angular/router";
import { UserService } from "app/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    MyEventsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    MdIconModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
