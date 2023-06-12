import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ]  
  
})
export class SwitchComponent implements ControlValueAccessor {
model: any = '' ;

  onChange: any = () => {};
  onTouched: any = () => {};
  touched: boolean = false;
  disabled: boolean = false;
  

  writeValue(value: any) {
    this.model = value;
    this.onChange(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  //update the model and changes needed for the view here
  updateModel() {
    this.touched = true;
    this.model = this.model === 'monthly' ? 'yearly' : 'monthly';
    this.onTouched();
    this.onChange(this.model);
  }

}
