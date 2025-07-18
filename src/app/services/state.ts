import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class State {

  searchSub: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }
}
