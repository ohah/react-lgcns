/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export interface ITodos {
  id: number;
  title: string;
  content: string;
}

export enum TODO_KEY {
  READ_TODO = 'READ_TODO',
}

type Options = { lazy: boolean } | null;

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

export const useTodosQuery = (options?: Options) => {
  return useQuery(TODO_KEY.READ_TODO, () => axios.get<ITodos[]>(`${API_URL}/crud`).then(({ data }) => data), {
    refetchOnWindowFocus: !options?.lazy,
    enabled: !options?.lazy,
  });
};

export const useTodosCreateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ title, content }: Omit<ITodos, 'id'>) => axios.post<ITodos[]>(`${API_URL}/crud`, { title, content }),
    {
      onSuccess: () => queryClient.invalidateQueries(TODO_KEY.READ_TODO),
    },
  );
};

export const useTodosRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id }: Pick<ITodos, 'id'>) => axios.delete<ITodos[]>(`${API_URL}/crud/${id}`), {
    onSuccess: () => queryClient.invalidateQueries(TODO_KEY.READ_TODO),
  });
};

export const useTodosUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, title, content }: ITodos) => axios.put<ITodos[]>(`${API_URL}/crud/${id}`, { title, content }),
    {
      onSuccess: () => queryClient.invalidateQueries(TODO_KEY.READ_TODO),
    },
  );
};

export const useTodos = (options?: Options) => {
  return {
    status: useTodosQuery(options ? { ...options } : { lazy: false }),
    create: useTodosCreateMutation().mutate,
    update: useTodosUpdateMutation().mutate,
    remove: useTodosRemoveMutation().mutate,
  };
};
