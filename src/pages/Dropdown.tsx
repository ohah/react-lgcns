import { useState } from 'react';

import { Dropdown, Tooltip } from 'components';
import { DropdownListProps } from 'components/Dropdown';
import { Alert } from 'react-bootstrap';

const DropdownLayout = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const data = [
    { title: '툴팁', value: '툴팁' },
    { title: '패널', value: '패널' },
    { title: '드롭다운', value: '드롭다운' },
    { title: '토글', value: '토글' },
    { title: '모달', value: '모달' },
    { title: '토스트', value: '토스트' },
  ];

  const onChange = (props: DropdownListProps) => {
    setSelectedValue(props.value);
  };
  return (
    <div>
      <div className="py-3">
        <Dropdown value={data} label="Label" onChange={onChange} />
      </div>
      <Alert variant="primary">{selectedValue || '선택된 값 없음'}</Alert>
    </div>
  );
};

export default DropdownLayout;
