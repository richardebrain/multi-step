import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.css'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponentComponent }],
})
export class StepperComponentComponent extends CdkStepper {
  @Input() activeClass: string = 'active';

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }

  toggleHeader(i: number) {
    this.selectedIndex = i;
    console.log(this.selected);
  }
}
