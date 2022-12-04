/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IKakaoAuth {
  isLogin: boolean;
  user?: any;
}

const initialState: IKakaoAuth = {
  isLogin: false,
};

export const KakaoSlice = createSlice({
  name: 'kakao/login',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<any>) => {
      state.isLogin = true;
      state.user = action.payload;
    },
  },
});

export const { update } = KakaoSlice.actions;

export const selectCount = (state: RootState) => state.kakao;

export default KakaoSlice.reducer;
