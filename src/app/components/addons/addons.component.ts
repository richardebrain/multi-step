import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AddOnsTypes } from 'src/utilities/type';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddonsComponent),
      multi: true,
    }
  ]
})
export class AddonsComponent implements ControlValueAccessor{
  model: any = '';
  @Input() addonsData!: AddOnsTypes
  onChange: any = () => {};
  onTouched: any = () => {};
  touched: boolean = false;
  disabled: boolean = false;

  writeValue(value: any) {
    this.model = value;
    this.onChange(value);
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  //update the model and changes needed for the view here
  updateModel(value: any) {
    this.touched = true;
    this.model = value;
    this.onTouched();
    this.onChange(this.model);
  }

  toggleAddon() {
    this.model = !this.model;
    this.onTouched();
    this.onChange(this.model);
  }
}
