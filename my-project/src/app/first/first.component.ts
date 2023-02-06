import {Component, OnInit} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CitiesService} from "../modules/core/services/cities.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  myForm!: FormGroup;
  cities!: any;

  constructor(private stepService: StepService,
              private fb: FormBuilder,
              private citiesService: CitiesService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getCities();

    this.stepService.setLevel(1);

    this.myForm = this.fb.group({
      ageMin: '',
      ageMax: '',
      gender: null,
      minority: null,
      disability: null,
      indigenous: null,
      universityId: null,
      title: '',
      description: '',
      contractType: null,
      paymentType: null,
      availability: null,
      amount: '',
      cityId: null,
      validFrom: null,
      validTo: null,
      tagline: null
    });
  }

  getCities() {
    this.citiesService.getCities().subscribe((res: any) => {
      this.cities = res.model;
    });
  }

  onSubmit() {
    this.router.navigate(['/second'], {state: {data: this.myForm.value}});
  }

}
