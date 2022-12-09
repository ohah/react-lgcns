/* eslint-disable default-param-last */
import { CounterActionType, ActionType } from './actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 } as CounterState;

//tookit에서 정의하는 reducers 부분이다.

export function counter(state: CounterState = initialState, action: ActionType): CounterState {
  switch (action.type) {
    case CounterActionType.INCREASE:
      return { count: state.count + action.payload };
    case CounterActionType.DECRESE:
      return { count: state.count + action.payload };
    case CounterActionType.INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
