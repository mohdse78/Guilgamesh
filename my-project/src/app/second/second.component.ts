import {Component, OnInit} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private stepService: StepService) {
  }

  ngOnInit(): void {
    this.stepService.setLevel(2);
  }
}
