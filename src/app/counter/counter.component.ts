import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

interface State {
  counter: number;
}

@Component({
  selector: 'rx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: Observable<number>;

	constructor(private store: Store<State>) {
		this.counter = store.select('counter');
	}

  ngOnInit() {

  }

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}

}
