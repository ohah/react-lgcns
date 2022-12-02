import { decrement, increment, incrementByAmount } from 'store/counter/slice';
import { useAppSelector, useAppDispatch } from 'store/hooks';

export function useCounter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return {
    count,
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    incrementByAmount: (num: number) => dispatch(incrementByAmount(num)),
  };
}
