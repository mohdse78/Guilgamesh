import {Component} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  myForm!: FormGroup;

  constructor(private stepService: StepService,
              private fb: FormBuilder,
              private router: Router
  ) {
    this.previousForm = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.stepService.setLevel(3);
    if (localStorage.getItem('cards'))
      this.cards = this.cards.concat(JSON.parse(<string>localStorage.getItem('cards')));

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
  }


  submit() {
    this.router.navigate(['info']);
  }
}
