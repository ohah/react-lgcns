import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tab } from 'components';
import { act } from 'react-dom/test-utils';
describe('Tab.tsx', () => {
  test('Tab Active Work', async () => {
    const { container, getByText } = render(
      <Tab.Wrapper>
        <Tab.Panel index={0}>탭1</Tab.Panel>
        <Tab.Panel index={1}>탭2</Tab.Panel>
        <Tab.Context index={0}> 탭1 내용 </Tab.Context>
        <Tab.Context index={1}> 탭2 내용 </Tab.Context>
      </Tab.Wrapper>,
    );
    expect(screen.getByText(/탭1 내용/i)).toBeInTheDocument();
    fireEvent.click(container.querySelectorAll('.panel')![1]);
    act(() => {
      expect(screen.getByText(/탭2 내용/i)).toBeInTheDocument();
    });
  });
});
