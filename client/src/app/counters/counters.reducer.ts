import { ActionReducer, Action } from '@ngrx/store';

export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const handlers = {};

handlers[ADD_COUNTER] = (state) => {
  return [...state, 0];
}

handlers[INCREMENT_COUNTER] = (state, action: Action) => {
  return [
    ...state.slice(0, action.payload),
    state[action.payload]+1,
    ...state.slice(action.payload + 1)
  ]
}

handlers[DECREMENT_COUNTER] = (state, action: Action) => {
  return [
    ...state.slice(0, action.payload),
    state[action.payload]-1,
    ...state.slice(action.payload + 1)
  ]
}

handlers[REMOVE_COUNTER] = (state, action: Action) => {
  return state
    .filter(counter => counter !== action.payload);
}

export function countersReducer(state: number[] = [], action: Action) {
	let handler = handlers[action.type];
	if(handler) {
		return handler(state, action);
	}

	return state;
}
