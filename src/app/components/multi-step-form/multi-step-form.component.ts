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
    duration: ['Monthly'],
  });
  formAddOns = this.fb.group({
    addOns: this.fb.group({
      onlineService: [true],
      cloudStorage: [true],
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
      duration: 'Monthly',
    },
    {
      title: 'Advanced',
      price: '$12/mo',
      img: '../../../assets/images/icon-advanced.svg',
      duration: 'Monthly',
    },
    {
      title: 'Pro',
      price: '$15/mo',
      img: '../../../assets/images/icon-pro.svg',
      duration: 'Monthly',
    },
  ];
  plansDataYearly: PlanTypes[] = [
    {
      title: 'Arcade',
      price: '$90/yr',
      img: '../../../assets/images/icon-arcade.svg',
      duration: 'Yearly',
      discount: '2 months free',
    },
    {
      title: 'Advanced',
      price: '$120/yr',
      img: '../../../assets/images/icon-advanced.svg',
      duration: 'Yearly',
      discount: '2 months free',
    },
    {
      title: 'Pro',
      price: '$150/yr',
      img: '../../../assets/images/icon-pro.svg',
      duration: 'Yearly',
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
  handleChange() {
    const duration = this.formPlans.value.duration;
    this.formPlans.controls.duration.setValue(
      duration === 'Monthly' ? 'Yearly' : 'Monthly'
    );
  }
  updatePlanValue(planTitle: string) {
    const plansArray =
      this.formPlans.value.duration === 'Monthly'
        ? this.plansDataMonthly
        : this.plansDataYearly;
    const plan = plansArray.find((plan) => plan.title === planTitle);
    return plan?.price;
  }
  setObjectKeyPairs(obj: any) {
    return Object.keys(obj).map((key) => ({ [key]: obj[key] }));
  }
  updateAddOnsValue() {
    const formAddOns = this.setObjectKeyPairs(this.formAddOns.value.addOns);
    const addOnsArray =
      this.formPlans.value.duration === 'Monthly'
        ? this.addOnsData
        : this.addOnsDataYearly;

    const price = addOnsArray
      .filter((addOn) =>
        formAddOns.some((formAddOn) => formAddOn[addOn.controlName])
      )
      .map((addOn) => ({ title: addOn.title, price: addOn.price }));
    return price;
  }
  isYearlyOrMonthly() {
    return this.formPlans.controls.duration.value == 'Yearly' ? true : false;
  }
  isSubmitted = false;
  calculateTotal(planTitle: string) {
    if (!planTitle) return 0;
    const planPrice = this.updatePlanValue(planTitle)!;
    const addOnsPrice = this.updateAddOnsValue();
    const total = addOnsPrice.reduce((acc, curr) => {
      return acc + parseFloat(curr.price.replace(/\D/g, ''));
    }, parseInt(planPrice.replace(/\D/g, '')));
    if (this.isYearlyOrMonthly()) {
      this.formSummary.controls.summary.setValue('+$' + total + '/yr');
      return '+$' + total + '/yr';
    } else {
      this.formSummary.controls.summary.setValue('+$' + total + '/mo');
      return '+$' + total + '/mo';
    }
  }
  constructor(private fb: FormBuilder) {}
  onSubmit(Formdetails: FormGroup) {
    this.isSubmitted = true;
  }
}
