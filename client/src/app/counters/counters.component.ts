import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './counters.reducer';

interface State {
  counters: number[];
}

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  counters: Observable<number[]>;

	constructor(private store: Store<State>) {
    this.counters = this.store.select('counters');
  }

  ngOnInit() {

  }

  add(){
		this.store.dispatch({ type: ADD_COUNTER });
	}

  increment(index: number){
		this.store.dispatch({ type: INCREMENT_COUNTER, payload: index });
	}

  decrement(index: number){
		this.store.dispatch({ type: DECREMENT_COUNTER, payload: index });
	}

	remove(counter) {
		this.store.dispatch({ type: REMOVE_COUNTER });
	}

}
