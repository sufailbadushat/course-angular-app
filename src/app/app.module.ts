import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=
[
  {
    path:"",
    component:AddCourseComponent
  },
  {
    path:"add",
    component:AddCourseComponent
  },
  {
    path:"view",
    component:ViewCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ViewCourseComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
