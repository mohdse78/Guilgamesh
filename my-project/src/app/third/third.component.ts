import {Component} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommonsService} from "../modules/core/services/commons.service";
import {PositionService} from "../modules/core/services/position.service";


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {
  cards: any = [
    {id: 1, name: 'Statistical analysis and computing'},
    {id: 2, name: 'Database management and architecture'},
    {id: 3, name: 'Cryptocurrency'},
    {id: 4, name: 'Business intelligence'}
  ];
  nameTag: any;
  newcard: any;
  previousForm!: any;
  allJob!: any;
  jobs: any[] = [];
  selectable!: any;
  removable!: any;
  separatorKeysCodes!: any;
  addOnBlur!: any;
  myForm!: FormGroup;
  loading: boolean = true;
  taglines: any = [];

  constructor(private stepService: StepService,
              private fb: FormBuilder,
              private router: Router,
              private commonService: CommonsService,
              private PositionService: PositionService
  ) {
    this.previousForm = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.stepService.setLevel(3);

    this.getJobTitles();

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

    this.myForm.patchValue(this.previousForm.data);
  }

  getJobTitles() {
    this.commonService.getJobTitles().subscribe(res => {
      this.allJob = res;
      this.loading = false;

      if (this.previousForm.data.tagline) {
        this.allJob.map((item: any) => {
          this.previousForm.data.tagline.map((tag: any) => {
            if (item.id == tag.jobTitleId) {
              this.jobs.push(item);
            }
          });
        });
      }
    });
  }

  selected(e: any) {
    let selectedItem = this.allJob.find((item: any) => item.id == e.option.value);
    if (this.jobs.indexOf(selectedItem) < 0) {
      this.jobs.push(selectedItem);
      this.taglines.push({
        jobTitleId: selectedItem.id
      });
      this.myForm.get('tagline')?.setValue(this.taglines);
    }
  }

  remove(id: number) {
    let index = this.jobs.findIndex(item => item.id == id);
    this.jobs.splice(index, 1);
  }

  submit() {
    if (this.myForm.valid) {
      this.PositionService.postPosition(this.myForm.value).subscribe(() => {
        this.router.navigate(['info'], {state: {data: this.myForm.value}});
      });
    }
  }

  return() {
    this.router.navigate(['/second'], {state: {data: this.myForm.value}});
  }
}
