import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toggle } from 'components';
import renderer from 'react-test-renderer';
describe('Toggle.tsx', () => {
  test('Active', () => {
    const stateData = render.create(<State />).getInstance();

    const { container } = render(<Toggle active />);
    const t = fireEvent.click(container);
    console.log('test', t);

    // expect(getByText('text'));
  });
});
