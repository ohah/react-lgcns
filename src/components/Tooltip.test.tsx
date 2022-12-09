import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tooltip } from 'components';

describe('Tooltip.tsx', () => {
  test('Tooltip MouseOver, MouseOut Check', async () => {
    const { container } = render(
      <Tooltip title="타이틀">
        <div>안녕</div>
      </Tooltip>,
    );
    fireEvent.mouseOver(screen.getByText(/안녕/i));
    expect(screen.getByText(/타이틀/i)).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText(/안녕/i));

    expect(container.querySelector('.message')).not.toBeInTheDocument();

    // const tree = renderer.create(
    //   <Tooltip title="타이틀">
    //     <div>안녕</div>
    //   </Tooltip>,
    // );

    // expect(tree.toJSON()).toMatchSnapshot();
  });
});
