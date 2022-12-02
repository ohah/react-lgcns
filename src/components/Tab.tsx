/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { Children, useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled/macro';

interface TabProps {
  children: React.ReactNode;
  defaultIndex?: number;
}

interface TabChildProps extends Omit<TabProps, 'defaultIndex'> {
  index: number;
}

interface ActiveProps {
  width: number;
  left: number;
}

const TabHeader = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
`;
const TabButton = styled.div`
  display: flex;
  cursor: pointer;
  flex-grow: 1;
  padding: 10px;
  justify-content: center;
  &.active {
    color: #1976d2;
  }
`;
const TabContextWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const TabWrapper = styled.div`
  border-radius: 10px;
  border-left-width: 1px;
  border-right-width: 1px;
  border: 1px solid #ccc;
  position: relative;
  outline: 0px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-color: rgb(231, 235, 240);
  border-image: initial;
`;

const TabActive = styled.span<ActiveProps>`
  background-color: #1976d2;
  height: 2px;
  position: absolute;
  bottom: 0;
  width: ${props => `${props.width}px`};
  left: ${props => `${props.left}px`};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Wrapper = (props: TabProps) => {
  const [index, setIndex] = useState<number>(props.defaultIndex || 0);
  const [active, setActive] = useState<ActiveProps>({
    left: 0,
    width: 0,
  });
  const header = useRef<HTMLDivElement>(null);
  const children = Children.map(props.children, child => child);
  const Panel = children?.filter(child => (child as any).type.displayName === 'Panel');
  const Context = children?.filter(child => (child as any).type.displayName === 'Context');
  const ContextChildren = useMemo(() => {
    return Context?.filter(
      context => ((context as any).props as React.PropsWithChildren<TabChildProps>).index === index,
    );
  }, [index]);
  useEffect(() => {
    const activeButton = header.current?.querySelector('.active');
    if (activeButton) {
      const width = activeButton.clientWidth;
      const leftMargin = header.current?.getBoundingClientRect().left || 0;
      const { left } = activeButton.getBoundingClientRect();
      setActive(() => {
        return { width: width, left: left - leftMargin };
      });
    }
  }, [index]);
  return (
    <TabWrapper>
      <TabHeader ref={header}>
        {Panel?.map((panel, i) => {
          return (
            <TabButton
              onClick={() => setIndex(i)}
              key={i}
              className={index === (panel as any).props.index ? 'active' : ''}
            >
              {panel}
            </TabButton>
          );
        })}
        <TabActive {...active} />
      </TabHeader>
      <TabContextWrapper>{ContextChildren}</TabContextWrapper>
    </TabWrapper>
  );
};
const Panel = React.memo((props: TabChildProps) => {
  return <div>{props.children}</div>;
});
Panel.displayName = 'Panel';
const Context = React.memo((props: TabChildProps) => {
  return <div>{props.children}</div>;
});
Context.displayName = 'Context';

export default { Wrapper, Panel, Context };
