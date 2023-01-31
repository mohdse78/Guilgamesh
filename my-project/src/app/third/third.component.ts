import {Component} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {

  constructor(private stepService: StepService) {
  }

  ngOnInit(): void {
    this.stepService.setLevel(3);
  }
}
