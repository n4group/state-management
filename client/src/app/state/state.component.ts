import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface State {
  counter: number;
}

@Component({
  selector: 'rx-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  state: Observable<State>;

  constructor(private store: Store<State>) {
    this.state = this.store.map(state => state);
  }

  ngOnInit() {

  }

}
