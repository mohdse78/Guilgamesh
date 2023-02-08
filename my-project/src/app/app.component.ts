import {Component, OnInit} from '@angular/core';
import {StepService} from "./modules/core/services/step.service";
import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-project';
  publishBtn: boolean = false;

  constructor(private stepService: StepService,
              private _location: Location) {
  }

  ngOnInit(): void {
    this.stepService.stepStatusSubject.subscribe(res => {
      this.publishBtn = res;
    })
  }

  return() {
    this._location.back();
  }
}
