import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

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

	constructor(private store: Store<State>) {
		this.counter = store.select('counter');
	}

}
