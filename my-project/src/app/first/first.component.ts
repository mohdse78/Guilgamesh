import {Component, OnInit} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private stepService: StepService) {
  }

  ngOnInit(): void {
    this.stepService.setLevel(1);
  }

}
