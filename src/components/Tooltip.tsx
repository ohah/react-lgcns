import { useState } from 'react';

import styled from '@emotion/styled/macro';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

const Message = styled.div`
  display: block;
  background-color: #eef3fd;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 9px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  padding: 0.4rem 0.75rem;
  position: relative;
  width: fit-content;
  position: absolute;
  white-space: nowrap;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = (props: TooltipProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span>{props.children}</span>
      {hover && <Message className="message">{props.title}</Message>}
    </Wrapper>
  );
};

export default Tooltip;
