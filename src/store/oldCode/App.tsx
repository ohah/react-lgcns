import { counterActions } from './counter/actions';
import useCounter from './counter/hooks';
import rootReducer, { RootState } from './store';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

const Counter = () => {
  const Selectcount = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const { counterState, increase, increaseBy, decrease } = useCounter();
  const { count } = counterState;
  return (
    <div>
      <button type="button" onClick={() => dispatch(counterActions.increase())}>
        +1
      </button>
      <button type="button" onClick={() => decrease()}>
        +2
      </button>
      <button type="button" onClick={() => increaseBy(5)}>
        +5
      </button>
      <div>{count}</div>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}
