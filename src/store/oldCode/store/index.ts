import { counter } from '../counter/reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
