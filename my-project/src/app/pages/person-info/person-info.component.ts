import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {StepService} from "../../modules/core/services/step.service";
import {CitiesService} from "../../modules/core/services/cities.service";
import {Router} from "@angular/router";
import {CommonsService} from "../../modules/core/services/commons.service";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  loaded: boolean = false;
  myForm: any;
  type: any;
  paymentType: any;
  timeframe: any;
  availability: any;
  location: any;
  university: any;
  tagline: any = [];


  constructor(private stepService: StepService,
              private commonService: CommonsService,
              private citiesService: CitiesService,
              private router: Router
  ) {
    this.myForm = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.stepService.setStatus(false);
    this.getUniversity();
    this.getLocation();
    this.getType();
    this.getTagline();
    this.getAvailibility();
    this.getTimeFram();
  }

  getUniversity() {
    this.commonService.getUniversity().subscribe((res: any) => {
      let allUniversities = res;
      allUniversities.map((x: any) => {
        if (this.myForm.data.universityId == x.id) {
          this.university = x.title;
        }
      })
    })
  }

  getLocation() {
    this.citiesService.getCities().subscribe((res: any) => {
      let allCities = res.model;
      allCities.map((x: any) => {
        if (x.key == this.myForm.data.cityId) {
          this.location = x.value;
        }
      })
    })
  }

  getType() {
    if (this.myForm.data.contractType == 0) {
      this.type = "In Person";
    } else if (this.myForm.data.contractType == 1) {
      this.type = "Remote";
    } else {
      this.type = "Hybrid";
    }
  }

  getTimeFram() {
    let difTimeFram = Math.round(this.myForm.data.validTo.getTime() - this.myForm.data.validFrom.getTime());
    let diffCount = difTimeFram / (1000 * 3600 * 24);
    if (diffCount < 30) {
      this.timeframe = diffCount + " Days";
    } else {
      let monthCounter = Math.round(diffCount / 30);
      this.timeframe = monthCounter + " Months"
    }
  }

  getAvailibility() {
    if (this.myForm.data.availability == 0) {
      this.availability = "Full Time";
    } else if (this.myForm.data.availability == 1) {
      this.availability = "Part Time";
    } else {
      this.availability = "Seasonal Say";
    }
  }

  getTagline() {
    this.commonService.getJobTitles().subscribe((res: any) => {
      let allTags = res;
      this.myForm.data.tagline.map((x: any) => {
        allTags.map((y: any) => {
          if (y.id == x.jobTitleId) {
            this.tagline.push(y.title);
          }
        })
      })
    })
  }

  ngAfterViewInit() {
    this.loaded = true;
  }

  ngOnDestroy(): void {
    this.stepService.setStatus(true);
  }

}
