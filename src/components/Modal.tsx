/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-useless-fragment */
import ReactDOM from 'react-dom';

import React, { useRef } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

const showAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  animation: ${showAnimation} 0.225s linear;
`;

const ModalBody = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  margin: 32px;
  position: relative;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: calc(100% - 64px);
  max-width: 600px;
  min-width: 32rem;
  min-height: 32rem;
`;
interface ModalProps {
  isShow?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  if (!document.getElementById('modal')) {
    const div = document.createElement('div');
    div.id = 'modal';
    document.body.appendChild(div);
  }
  const wrapper = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const onWrapper = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.currentTarget === wrapper.current) {
      props.onClose();
    }
  };
  const onBody = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <>
      {props.isShow === true && (
        <ModalWrapper onClick={onWrapper} ref={wrapper}>
          <ModalBody onClick={onBody} ref={body}>
            {props.children}
          </ModalBody>
        </ModalWrapper>
      )}
    </>,
    document.getElementById('modal')!,
  );
};

export default Modal;
