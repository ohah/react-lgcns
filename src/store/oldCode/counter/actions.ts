import { createStore } from 'redux';

//tookit에서는 고유 키값을 name+함수명으로 정해주지만 기존에는 정해주지 않아 별도의 고유 상수를 정의 했어야 했고 typescript에서는 Enum or as const 주로 사용
export enum CounterActionType {
  INCREASE = 'counter/INCREASE',
  DECRESE = 'counter/DECRESE',
  INCREASE_BY = 'counter/INCREASE_BY',
}

//createSlice에서 자동으로 정의 해주는 actions도 직접 정의 해줘야한다.
export const counterActions = {
  increase: () => ({
    type: CounterActionType.INCREASE,
    payload: 1,
  }),
  decrease: () => ({
    type: CounterActionType.DECRESE,
    payload: -1,
  }),
  increaseBy: (diff: number) => ({
    type: CounterActionType.INCREASE_BY,
    payload: diff,
  }),
};

//createSlice에서 자동으로 정의 해주는 action tpye도 마찬가지로 직접 정의 해줘야한다.
export type ActionType =
  | ReturnType<typeof counterActions.increaseBy>
  | ReturnType<typeof counterActions.increase>
  | ReturnType<typeof counterActions.decrease>;
