import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {StepComponent} from "./components/step/step.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: StepComponent
      },
      {
        path: 'second',
        component: SecondComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const ArrayOfComponents = [FirstComponent, SecondComponent, ThirdComponent];

