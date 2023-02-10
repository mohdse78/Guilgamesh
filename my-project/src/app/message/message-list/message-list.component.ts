import {Component, OnInit} from '@angular/core';
import {StepService} from "../../modules/core/services/step.service";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  chatList: any = [
    {
      id: 0,
      isOnline: true,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 5,
      lastDate: '8/25/2022',
      profileImage: ''
    },
    {
      id: 1,
      isOnline: false,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 0,
      lastDate: '8/25/2022',
      profileImage: ''
    },
    {
      id: 2,
      isOnline: true,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 2,
      lastDate: '8/25/2022',
      profileImage: ''
    },
    {
      id: 3,
      isOnline: false,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 1,
      lastDate: '8/25/2022',
      profileImage: null
    },
    {
      id: 4,
      isOnline: false,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 0,
      lastDate: '8/25/2022',
      profileImage: ''
    },
    {
      id: 5,
      isOnline: true,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 0,
      lastDate: '8/25/2022',
      profileImage: ''
    },
    {
      id: 6,
      isOnline: false,
      personName: 'Ross Geller',
      lastPM: 'I was thinking the cafe downtown',
      unreadMessages: 0,
      lastDate: '8/25/2022',
      profileImage: ''
    },
  ];

  constructor(
    private stepService: StepService
  ) {
  }

  ngOnInit(): void {
    this.stepService.setStatus(false);
  }

}
