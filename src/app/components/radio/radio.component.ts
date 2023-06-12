import { Component, Input, Self, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  constructor() {}

  @Input() title: string = '';
  @Input() duration: string = '';
  @Input() discount: string = '';
  @Input() price: string = '';
  @Input() img: string = '';
  @Input() value: string = '';

  model: any = '';
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
}
