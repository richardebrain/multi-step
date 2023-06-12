import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlanTypes, AddOnsTypes } from 'src/utilities/type';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
})
export class MultiStepFormComponent {
  @Input() isLinear: boolean = true;
  @Input() isEditable: boolean = true;
  @Input() selectedIndex: number = 2;
  formInfo = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
  });
  formPlans = this.fb.group({
    plans: ['Arcade', Validators.required],
    duration: ['monthly'],
  });
  formAddOns = this.fb.group({
    addOns: this.fb.group({
      onlineService: [false],
      cloudStorage: [false],
      customizableProfile: [false],
    }),
  });
  formSummary = this.fb.group({
    summary: [''],
  });

  plansDataMonthly: PlanTypes[] = [
    {
      title: 'Arcade',
      price: '$9/mo',
      img: '../../../assets/images/icon-arcade.svg',
      duration: 'monthly',
    },
    {
      title: 'Advanced',
      price: '$12/mo',
      img: '../../../assets/images/icon-advanced.svg',
      duration: 'monthly',
    },
    {
      title: 'Pro',
      price: '$15/mo',
      img: '../../../assets/images/icon-pro.svg',
      duration: 'monthly',
    },
  ];
  plansDataYearly: PlanTypes[] = [
    {
      title: 'Arcade',
      price: '$90/yr',
      img: '../../../assets/images/icon-arcade.svg',
      duration: 'yearly',
      discount: '2 months free',
    },
    {
      title: 'Advanced',
      price: '$120/yr',
      img: '../../../assets/images/icon-advanced.svg',
      duration: 'yearly',
      discount: '2 months free',
    },
    {
      title: 'Pro',
      price: '$150/yr',
      img: '../../../assets/images/icon-pro.svg',
      duration: 'yearly',
      discount: '2 months free',
    },
  ];
  addOnsData: AddOnsTypes[] = [
    {
      title: 'Online Service',
      description: 'Access to Multiplayer games',
      price: '+$1/mo',
      controlName: 'onlineService',
    },
    {
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
      controlName: 'cloudStorage',
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
      controlName: 'customizableProfile',
    },
  ];
  addOnsDataYearly: AddOnsTypes[] = [
    {
      title: 'Online Service',
      description: 'Access to Multiplayer games',
      price: '+$10/yr',
      controlName: 'onlineService',
    },
    {
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      price: '+$20/yr',
      controlName: 'cloudStorage',
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$20/yr',
      controlName: 'customizableProfile',
    },
  ];

  constructor(private fb: FormBuilder) {}
  onSubmit(Formdetails: FormGroup) {
    console.log(Formdetails.value);
  }
}
