import { useState } from 'react';

import styled from '@emotion/styled';


interface ToggleProps {
  active: boolean;
}

export const Switch = styled.div<ToggleProps>`
  background-color: brown;
  height: 30px;
  width: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 0.25rem;
  & span {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: white;
    transition: all 0.3s;
    transform: ${props => (props.active === true ? `translateX(calc(100% + 10px))` : 'translateX(0%)')};
  }
`;
const Toggle = (props: ToggleProps) => {
  const [checked, setChecked] = useState(props.active);
  return (
    <div>
      <Switch className="switch" active={checked} onClick={() => setChecked(!checked)}>
        <span />
      </Switch>
    </div>
  );
};

export default Toggle;
