import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  stepItem: any[] = [
    {stepNum: '1', text: 'Position Information'},
    {stepNum: '2', text: 'Requirement'},
    {stepNum: '3', text: 'Tagline'},
  ];

  ngOnInit(): void {
  }
}
