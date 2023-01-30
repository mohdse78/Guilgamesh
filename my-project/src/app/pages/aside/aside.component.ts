import {Component} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  items: any[] = [
    {id: 1, title: 'Feed', icon: 'feed.svg'},
    {id: 2, title: 'Just OKs', icon: 'check-circle.svg'},
    {id: 3, title: 'Review', icon: 'magic-star.svg'},
    {id: 4, title: 'Message', icon: 'email.svg'},
    {id: 5, title: 'Saved', icon: 'book-mark.svg'},
    {id: 6, title: 'Settings', icon: 'setting.svg'},
  ];
  activeGiftStyle: boolean = false;


  selectedItem(id: number) {
    this.activeGiftStyle = (id == 0);

    this.items.forEach(item => item.isSelect = false);
    let itemSelected = this.items.find(item => item.id == id);
    itemSelected.isSelect = true;
  }
}
