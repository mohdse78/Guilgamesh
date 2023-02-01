import {Component} from '@angular/core';
import {StepService} from "../modules/core/services/step.service";
import {stringify} from "postcss";

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

  constructor(private stepService: StepService) {
  }

  ngOnInit(): void {
    this.stepService.setLevel(3);
    if (localStorage.getItem('cards'))
      this.cards = this.cards.concat(JSON.parse(<string>localStorage.getItem('cards')));
  }

  // addingCard() {
  //   localStorage.setItem('done', JSON.stringify(this.newcard));
  // }
}
