import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const handlers = {};

handlers[INCREMENT] = (state, action: Action) => {
	return state + 1;
}

handlers[DECREMENT] = (state, action: Action) => {
	return state - 1;
}

handlers[RESET] = (state, action: Action) => {
	return 0;
}

export function counterReducer(state: number = 0, action: Action) {
	let handler = handlers[action.type];
	if(handler) {
		return handler(state, action);
	}

	return state;
}
