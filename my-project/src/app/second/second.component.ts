import {Component, OnInit} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonsService} from "../modules/core/services/commons.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  previousForm!: any;
  myForm!: FormGroup;
  minority!: any;
  disability!: any;
  universities!: any;

  constructor(private stepService: StepService,
              private fb: FormBuilder,
              private router: Router,
              private commonService: CommonsService
  ) {
    this.previousForm = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    // if (!this.previousForm) {
    //   this.router.navigate(['']);
    //   return;
    // }

    this.getMinority();
    this.getDisability();
    this.getUniversity()


    this.stepService.setLevel(2);

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
      cityId: null
    });

    this.myForm.patchValue(this.previousForm.data);
  }

  getMinority() {
    this.commonService.getMinority().subscribe(res => {
      this.minority = res;
    });
  }

  getDisability() {
    this.commonService.getDisability().subscribe(res => {
      this.disability = res;
    });
  }

  getUniversity() {
    this.commonService.getUniversity().subscribe(res => {
      this.universities = res;
    });
  }
}
