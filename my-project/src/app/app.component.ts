import {Component, OnInit} from '@angular/core';
import {StepService} from "./modules/core/services/step.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-project';
  publishBtn: boolean = false;

  constructor(private stepService: StepService) {
  }

  ngOnInit(): void {
    this.stepService.stepStatusSubject.subscribe(res => {
      this.publishBtn = res;
    })
  }
}
