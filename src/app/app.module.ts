import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    CustomInputComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
