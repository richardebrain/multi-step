import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StepperComponentComponent } from './components/stepper-component/stepper-component.component';
import { SwitchComponent } from './components/switch/switch.component';
import { RadioComponent } from './components/radio/radio.component';
import { AddonsComponent } from './components/addons/addons.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    CustomInputComponent,
    LayoutComponent,
    StepperComponentComponent,
    SwitchComponent,
    RadioComponent,
    AddonsComponent,
  ],
  imports: [BrowserModule,ReactiveFormsModule,CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
