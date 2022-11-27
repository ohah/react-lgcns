import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tooltip } from 'components';
import renderer, { act } from 'react-test-renderer';
describe('Tooltip.tsx', () => {
  test('Tooltip TypeCheck', async () => {
    const { container, getAllByText } = render(
      <Tooltip title="타이틀">
        <div>안녕</div>
      </Tooltip>,
    );
    // const infoIcon = screen.getByTestId('tooltip');
    // const message = screen.getByTestId('message');
    // console.log('messge', message);
    // const { root, getInstance } = renderer.create(
    //   <Tooltip title="타이틀">
    //     <div>안녕</div>
    //   </Tooltip>,
    // );
    // const text = screen.getByText(/타이틀/i);
    // console.log('text', text);
    // await userEvent.hover(container);
    // const text = screen.getByText(/안녕/i);
    // const hoverText = await screen.getByText(/안녕/i);
    // expect(hoverText).toBeInTheDocument();
    // console.log('Hello', await getComputedStyle(container.querySelector('.message')!).display);
    await fireEvent.mouseOver(container);
    const message = await container.querySelector('.message');
    await expect(message).toBeVisible();
    await waitFor(() => {
      // console.log('waitFor', getComputedStyle(container.querySelector('.message')!).display);
    });
    // await act(() => {
    //   console.log('hover', getComputedStyle(container.querySelector('.message')!).display);
    // });
  });
});
