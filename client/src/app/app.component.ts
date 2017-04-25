import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

interface State {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'state management using ngrx';
  counter: Observable<number>;

  counters: Observable<number[]>;
  countersLength: Observable<number>;
  stack: Observable<number>;

	constructor(private store: Store<State>) {
		this.counter = store.select('counter');

    this.counters = store.select('counters');

    this.countersLength = this.counters
      .map((counters: any[]) => counters.length);

    this.stack = this.counters
      .map((counters: any[]) => counters.reduce((a, b) => {
        console.log(a, b);
        return a+b;
      }, 0));
	}

}
