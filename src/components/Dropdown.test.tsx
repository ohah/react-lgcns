import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dropdown } from 'components';
import { DropdownListProps } from 'components/Dropdown';

describe('Dropdown.tsx', () => {
  test('Dropdown onChange, List Show Test', () => {
    const data = [
      { title: '툴팁', value: '툴팁' },
      { title: '패널', value: '패널' },
      { title: '드롭다운', value: '드롭다운' },
      { title: '토글', value: '토글' },
      { title: '모달', value: '모달' },
      { title: '토스트', value: '토스트' },
    ];

    const mockOnChange = jest.fn();
    mockOnChange.mockImplementation((props: DropdownListProps) => {
      return props;
    });

    const { container, getAllByText, getByText } = render(
      <Dropdown
        value={data}
        label="Label"
        defaultValue="툴팁"
        onChange={(props: DropdownListProps) => {
          mockOnChange(props);
        }}
      />,
    );
    // container.find
    expect(getByText(/툴팁/i)).toBeInTheDocument();
    const open = fireEvent.click(getByText(/툴팁/i));
    // if (open) {
    //   expect(getByText(/패널/i)).toBeInTheDocument();
    // expect(getByText(/패널/i)).not.toBeInTheDocument();
    // }
    // const listClick = fireEvent.click(getByText(/패널/i));
    // if (listClick) {
    //   expect(mockOnChange).toBeCalledTimes(1);
    //   expect(mockOnChange).toBeCalledWith(data[1]);
    // }
  });
});
