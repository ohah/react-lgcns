import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dropdown } from 'components';
import { DropdownListProps } from 'components/Dropdown';
import renderer, { act } from 'react-test-renderer';
describe('Dropdown.tsx', () => {
  test('Dropdown TypeCheck', async () => {
    const data = [
      { title: '툴팁', value: '툴팁' },
      { title: '패널', value: '패널' },
      { title: '드롭다운', value: '드롭다운' },
      { title: '토글', value: '토글' },
      { title: '모달', value: '모달' },
      { title: '토스트', value: '토스트' },
    ];

    const onChange = (props: DropdownListProps) => {
      console.log('test');
    };

    const { container, getAllByText } = render(
      <div>
        <div className="py-3">
          <Dropdown value={data} label="Label" onChange={onChange} />
        </div>
      </div>,
    );
    await fireEvent.mouseDown(container);
    const message = await container.querySelector('.message');
    await expect(message).toBeVisible();
  });
});
