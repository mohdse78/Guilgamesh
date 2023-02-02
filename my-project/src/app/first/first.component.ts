import {Component, OnInit} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private stepService: StepService,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.stepService.setLevel(1);

    this.myForm = this.fb.group({
      title: '',
      description: '',
    });
  }

  onSubmit() {

  }

}
