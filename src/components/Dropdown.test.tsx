import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dropdown } from 'components';
import { DropdownListProps } from 'components/Dropdown';
import { act } from 'react-dom/test-utils';
describe('Dropdown.tsx', () => {
  test('Dropdown onChange, List Show Test', async () => {
    const data = [
      { title: '툴팁', value: '툴팁' },
      { title: '패널', value: '패널' },
      { title: '드롭다운', value: '드롭다운' },
      { title: '토글', value: '토글' },
      { title: '모달', value: '모달' },
      { title: '토스트', value: '토스트' },
    ];

    const onChange = (props: DropdownListProps) => {
      expect(props.title).toBe('패널');
    };

    const { container, getAllByText } = render(<Dropdown value={data} label="Label" onChange={onChange} />);
    await fireEvent.click(container.querySelector('.select')!);
    await waitFor(async () => {
      await expect(container.querySelector('.list')).toBeInTheDocument();
    });
    await fireEvent.click(container.querySelectorAll('.list li')![1]);
    // await expect(screen.findAllByText(/패널/i)).toBeInTheDocument();
  });
});
