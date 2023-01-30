import {Component} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  items: any[] = [
    {title: 'Feed', icon: 'feed.svg'},
    {title: 'Just OKs', icon: 'check-circle.svg'},
    {title: 'Review', icon: 'magic-star.svg'},
    {title: 'Message', icon: 'email.svg'},
    {title: 'Saved', icon: 'book-mark.svg'},
    {title: 'Settings', icon: 'setting.svg'},
  ]

}
