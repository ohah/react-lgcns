/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

export interface DropdownListProps {
  title: string;
  value: string;
}

export interface DropdownProps {
  value: DropdownListProps[];
  onChange: (value: DropdownListProps) => void;
  defaultValue?: string;
  label: string;
}

const Wrapper = styled.div`
  position: relative;
  padding: 8.5px 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 120px;
  width: 5rem;
`;
interface SelectState {
  isShow: boolean;
}

const Select = styled.div<SelectState>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & svg {
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
    transform: ${props => (props.isShow ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const ShowAnimation = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;
const HideAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
    display:none;
  }
`;
const List = styled.li``;
const Label = styled.div<SelectState>`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  position: relative;
  display: block;
  transform-origin: top left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(133% - 24px);
  position: absolute;
  background: white;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: auto;
  user-select: none;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${props =>
    props.isShow === true ? 'translate(8px, -10px) scale(0.75);' : 'translate(10px, 8.5px) scale(1);'};
`;
const ListWrapper = styled.ul<SelectState>`
  position: absolute;
  min-width: 5rem;
  border-radius: 5px;
  top: calc(100% + 5px);
  padding: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 1px 0.5px 0.2px 0 #ccc;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  left: 0;
  animation: ${props => (props.isShow === true ? ShowAnimation : HideAnimation)} 0.2s linear;
  transform-origin: top center;
  animation-fill-mode: forwards;

  & ${List}:hover {
    background-color: #eee;
  }
  & ${List} {
    background-color: transparent;
    outline: 0px;
    min-width: 120px;
    border: 0px;
    margin: 0px;
    border-radius: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    color: inherit;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    text-decoration: none;
    min-height: 48px;
    padding: 6px 16px;
    box-sizing: border-box;
    white-space: nowrap;
  }
  & ${List}:last-child {
    border-bottom: 0;
  }
`;

const Dropdown = ({ value, onChange, defaultValue, label }: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [displayValue, setValue] = useState(defaultValue || '');
  const [isAnimation, setAnimation] = useState(false);
  const [time, setTime] = useState<ReturnType<typeof setTimeout>>();
  const selectedValue = useCallback((props: DropdownListProps) => {
    setAnimation(false);
    setValue(props.value);
    onChange(props);
  }, []);

  const closeDropdown = (e: MouseEvent) => {
    e.preventDefault();
    setAnimation(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown);
    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  }, []);

  useEffect(() => {
    if (isAnimation === true) {
      clearTimeout(time);
      setOpen(true);
    } else if (isAnimation === false) {
      setTime(
        setTimeout(() => {
          setOpen(false);
        }, 200),
      );
    }
    return () => {};
  }, [isAnimation]);
  return (
    <Wrapper onClick={e => e.stopPropagation()}>
      <Select className="select" isShow={isAnimation} onClick={() => setAnimation(!isAnimation)}>
        <Label isShow={isAnimation || displayValue !== ''}> {label} </Label>
        <span>{displayValue}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 16l-6-6h12z" />
        </svg>
      </Select>
      {isOpen && (
        <ListWrapper className="list" isShow={isAnimation}>
          {value.map(list => {
            return (
              <List key={list.value} onClick={() => selectedValue(list)}>
                {list.title}
              </List>
            );
          })}
        </ListWrapper>
      )}
    </Wrapper>
  );
};

export default Dropdown;
