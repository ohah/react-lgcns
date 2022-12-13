import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'store/counter/slice';
import googleLoginReducer from 'store/google/slice';
import KakaoLoginReducer from 'store/kakao/slice';
import todoReducer from 'store/todo/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    google: googleLoginReducer,
    kakao: KakaoLoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
