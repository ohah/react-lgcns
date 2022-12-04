/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IGoogleAuth {
  isLogin: boolean;
  user?: IGoogleJWT;
}

export interface IGoogleJWT {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

const initialState: IGoogleAuth = {
  isLogin: false,
};

export const GoogleLoginSlice = createSlice({
  name: 'google/login',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IGoogleJWT>) => {
      state.isLogin = true;
      state.user = action.payload;
    },
  },
});

export const { update } = GoogleLoginSlice.actions;

export const selectCount = (state: RootState) => state.google;

export default GoogleLoginSlice.reducer;
