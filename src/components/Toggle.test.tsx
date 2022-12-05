import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toggle } from 'components';
import renderer from 'react-test-renderer';
describe('Toggle.tsx', () => {
  test('Toogle Default True', async () => {
    const { root } = renderer.create(<Toggle active />);
    expect(root.props.active).toBe(true);
  });
  test('Toogle Default False', async () => {
    const { root } = renderer.create(<Toggle active={false} />);
    expect(root.props.active).toBe(false);
  });
  test('Toogle Button', async () => {
    const { container } = render(<Toggle active />);
    const Button = container.querySelector('.switch')!;

    expect(await getComputedStyle(container.querySelector('span')!)?.transform).toBe('translateX(calc(100% + 10px))');
    await fireEvent.click(Button);
    expect(await getComputedStyle(container.querySelector('span')!)?.transform).toBe('translateX(0%)');
  });
});
