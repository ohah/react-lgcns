/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface ITodos {
  id: number;
  title: string;
  content: string;
}
const initialState: ITodos[] = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Omit<ITodos, 'id'>>) => {
      return state;
    },
    remove: (state, action: PayloadAction<Pick<ITodos, 'id'>>) => {
      return state;
    },
    update: (state, action: PayloadAction<ITodos>) => {
      return state;
    },
  },
});

export const { create, remove, update } = todoSlice.actions;

export const selectCount = (state: RootState) => state.todo;

export default todoSlice.reducer;
