import { useAppSelector, useAppDispatch } from 'store/hooks';
import { create, update, remove, ITodos } from 'store/todo/slice';

export function useReduxTodos() {
  const todoList = useAppSelector(state => state.todo);
  const dispatch = useAppDispatch();

  return {
    todoList,
    create: (action: Omit<ITodos, 'id'>) => dispatch(create(action)),
    update: (action: ITodos) => dispatch(update(action)),
    remove: (action: Pick<ITodos, 'id'>) => dispatch(remove(action)),
  };
}
