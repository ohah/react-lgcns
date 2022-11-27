/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen, waitFor, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from 'react-bootstrap';

import { useCallback, useState } from 'react';

const useModal = () => {
  const [isShow, setShow] = useState<boolean>(false);
  const toggle = useCallback(() => setShow(state => !state), []);
  return useState<boolean>(false);
};

describe('Tooltip.tsx', () => {
  test('Props Test', async () => {});
  test('Modal Show Test', async () => {
    const { result, rerender } = renderHook(() => useModal());
    const [isShow, setShow] = result.current;

    const { container } = render(
      <>
        <button onClick={() => setShow(true)} type="button">
          클릭
        </button>
        <Modal isShow={result.current[0]} close={() => setShow(!result.current[0])}>
          테스트
        </Modal>
      </>,
    );
    // await waitForNextUpdate();
    const button = container.querySelector('button')!;
    expect(await result.current[0]).toEqual(false);

    await fireEvent.click(button);
    // console.log('after', result.current[0]);
    expect(await result.current[0]).toEqual(true);
  });
});
