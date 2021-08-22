import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const appRoutes: Routes = [
  {path: 'reactive' , component: ReactiveComponent},
  {path: 'viewdetails' , component: ViewdetailsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    ViewdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
