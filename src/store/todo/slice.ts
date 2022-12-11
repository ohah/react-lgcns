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
      const data = state.map(todo => todo.id);
      const id = data.length === 0 ? 1 : Math.max(...data) + 1;
      const inputData = [{ id: id, title: action.payload.title, content: action.payload.content }];
      return [...state, ...inputData];
    },
    remove: (state, action: PayloadAction<Pick<ITodos, 'id'>>) => {
      return [...state.filter(todo => action.payload.id !== todo.id)];
    },
    update: (state, action: PayloadAction<ITodos>) => {
      const update = state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            content: action.payload.content,
          };
        }
        return todo;
      });
      return [...update];
    },
  },
});

export const { create, remove, update } = todoSlice.actions;

export const selectCount = (state: RootState) => state.todo;

export default todoSlice.reducer;
