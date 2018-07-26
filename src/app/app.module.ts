import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyInboxComponent } from './my-inbox/my-inbox.component';
import { RegistrationComponent } from './registration/registration.component';
import { PastWebinarComponent } from './past-webinar/past-webinar.component';
import { ReportsComponent } from './reports/reports.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MyInboxComponent,
    RegistrationComponent,
    PastWebinarComponent,
    ReportsComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:RegistrationComponent},
      {path:'my-inbox', component:MyInboxComponent},
      {path:'past-webinars', component:PastWebinarComponent},
      {path:'reports', component:ReportsComponent},
      {path:'**',component:NotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
