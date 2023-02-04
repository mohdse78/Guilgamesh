import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import { PersonInfoComponent } from './pages/person-info/person-info.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FirstComponent,
      },
      {
        path: 'second',
        component: SecondComponent,
      },
      {
        path: 'third',
        component: ThirdComponent,
      },
      {
        path:'info',
        component: PersonInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const ArrayOfComponents = [FirstComponent, SecondComponent, ThirdComponent, PersonInfoComponent];

