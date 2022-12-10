import React, { useState } from 'react';

import { Toggle } from 'components';
import { Alert, Stack } from 'react-bootstrap';

const ToggleLayout = () => {
  const [active, setActive] = useState(false);
  const onChange = (value: boolean) => {
    setActive(value);
  };
  return (
    <>
      <h2> Q.토글의 상태값에 따라 active 값이 변경되게 하세요.(useEffect, Deps 활용) </h2>
      <div>
        <Stack gap={2}>
          <Toggle active={active} onChange={onChange} />
          <Alert variant="primary">{active.toString()}</Alert>
        </Stack>
      </div>
    </>
  );
};

export default ToggleLayout;
