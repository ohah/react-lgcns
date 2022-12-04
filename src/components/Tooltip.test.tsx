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
    await fireEvent.mouseOver(container);
    const message = await container.querySelector('.message');
    await expect(message).toBeVisible();
  });
});
