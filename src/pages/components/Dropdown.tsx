import { useState } from 'react';

import { Dropdown } from 'components';
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
      <h2>Q. useEffect를 활용하여 드롭다운 외의 영역을 클릭시 Dropdown이 닫히게 하세요 </h2>
      <h2>ListWrapper는 isOpen의 상태에 따라 보여지거나 사라져야 합니다. </h2>
      <div className="py-3">
        <Dropdown value={data} label="Label" onChange={onChange} />
      </div>
      <Alert variant="primary">{selectedValue || '선택된 값 없음'}</Alert>
    </div>
  );
};

export default DropdownLayout;
