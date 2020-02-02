import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import {
  longAnimationDurationMs,
  shortAnimationDurationMs
} from "../../constants/measures";

export const AutocompleteDropdownItem = ({ text, selected, onClick }) => {
  return (
    <Item selected={selected} onClick={onClick}>
      {text}
    </Item>
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
    background-color: ${colors.grey2};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${colors.grey2};
    `}
`;
