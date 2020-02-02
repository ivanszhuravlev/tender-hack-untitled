import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import {
  longAnimationDurationMs,
  shortAnimationDurationMs
} from "../../constants/measures";
import historyIcon from "../../assets/history.webp";

export const AutocompleteDropdownItem = ({
  text,
  selected,
  onClick,
  isHistory
}) => {
  return (
    <Container>
      {isHistory ? <Icon src={historyIcon} /> : <Whitespace />}
      <Item selected={selected} onClick={onClick}>
        {text}
      </Item>
    </Container>
  );
};

const Item = styled.div`
  flex-grow: 1;
  padding: 4px 8px;
  background-color: ${colors.white};
  transition: all ease-in-out ${shortAnimationDurationMs}ms;
  font-size: 13px;
  display: flex;
  align-items: center;

  cursor: pointer;
  &:hover {
    background-color: ${colors.grey};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${colors.grey};
    `}
`;

const Icon = styled.img`
  /* height: 18px; */
  width: 14px;
  margin-right: 4px;
  opacity: 0.4;
`;

const Whitespace = styled.div`
  width: 14px;
  margin-right: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
