import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepService} from "../../modules/core/services/step.service";
import {FormBuilder} from "@angular/forms";
import {CitiesService} from "../../modules/core/services/cities.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit, OnDestroy {
  cards: any = [
    {id: 1, name: 'Statistical analysis and computing'},
    {id: 2, name: 'Database management and architecture'},
    {id: 3, name: 'Cryptocurrency'},
    {id: 4, name: 'Business intelligence'}
  ];
  myForm: any;


  constructor(private stepService: StepService,
              private router: Router
  ) {
    this.myForm = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.stepService.setStatus(false);
    console.log(this.myForm.value)
  }

  ngOnDestroy(): void {
    this.stepService.setStatus(true);
  }

}
