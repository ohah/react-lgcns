import { useContext, useState, createContext } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

export type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export interface ToastProps {
  id: string;
  type: TypeOptions;
  message: string;
  autoClose: number;
}
export interface ToastOption {
  autoClose: number;
  type: TypeOptions;
}

const uid = () => {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
};

export interface ToastContextProps {
  toast: (message: string, options: ToastOption) => void;
  queue: ToastProps[];
  setQueue: React.Dispatch<React.SetStateAction<ToastProps[]>>;
}

export const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const useToast = () => {
  return useContext(ToastContext);
};

export const useToastInit = () => {
  const [queue, setQueue] = useState<ToastProps[]>([]);
  const toast = (message: string, options: ToastOption) => {
    const newToast: ToastProps = {
      id: uid(),
      message,
      ...options,
    };
    setQueue(queue => {
      return [...queue, newToast];
    });
  };
  return {
    toast,
    queue,
    setQueue,
  };
};

const ShowAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%);
  }
`;

const color = {
  info: '#445ed3',
  success: '#2fc468',
  warning: '#cadb30',
  error: '#f80808',
  default: '#121a85',
};
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  margin: 0.75rem;
`;
const ToastStyle = styled.div<ToastProps>`
  color: #fff;
  background-color: ${props => color[props.type]};
  padding: 10px 10px;
  border-radius: 10px;
  &.show {
    animation: ${ShowAnimation} 0.2s;
  }
  &.hide {
    transform: translateX(150%);
    transition: transform 0.2s;
  }
`;
const Toast = (props: ToastProps) => {
  const { setQueue } = useContext(ToastContext);

  const [close, setClose] = useState<boolean>(false);
  setTimeout(() => {
    setClose(true);
  }, 3000);
  return (
    <ToastStyle key={props.id} {...props} className={close === false ? 'show' : 'hide'}>
      {props.message}
    </ToastStyle>
  );
};
export const ToastContainer = () => {
  const { queue } = useContext(ToastContext);
  return (
    <Wrapper>
      {queue.map(props => {
        return <Toast key={props.id} {...props} />;
      })}
    </Wrapper>
  );
};
export default {
  Container: ToastContainer,
  Context: ToastContext,
  init: useToastInit,
};
