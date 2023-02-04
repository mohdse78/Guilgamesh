import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StepService {
  stepLevelSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  stepLevel$: Observable<number> = this.stepLevelSubject?.asObservable();

  stepStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  stepStatus$: Observable<boolean> = this.stepStatusSubject?.asObservable();

  constructor() {
  }

  setLevel(level: number) {
    this.stepLevelSubject.next(level);
  }

  setStatus(status: boolean) {
    this.stepStatusSubject.next(status);
  }
}
