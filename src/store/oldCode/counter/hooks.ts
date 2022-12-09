import { useCallback } from 'react';

import { RootState } from '../store';

import { counterActions } from './actions';

import { useDispatch, useSelector } from 'react-redux';

const useCounter = () => {
  const counterState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const increase = useCallback(() => dispatch(counterActions.increase()), [dispatch]);
  const decrease = useCallback(() => dispatch(counterActions.decrease()), [dispatch]);
  const increaseBy = useCallback((diff: number) => dispatch(counterActions.increaseBy(diff)), [dispatch]);
  return {
    counterState,
    increase,
    decrease,
    increaseBy,
  };
};

export default useCounter;
