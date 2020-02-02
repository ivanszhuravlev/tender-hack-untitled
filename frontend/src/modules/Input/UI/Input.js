import styled, { css } from "styled-components";
import { colors } from "../../../constants/colors";
import { longAnimationDurationMs } from "../../../constants/measures";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${colors.grey};
  padding: 0 28px;
  font-size: 19px;
  font-weight: 100;
  outline: none;
  box-sizing: border-box;
  border-radius: 30px;
  transition: all ease-in-out ${longAnimationDurationMs}ms;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 1px solid ${colors.grey2};
    `}
`;

export const InputContainer = styled.div`
  position: relative;
  width: 400px;
  transition: all ease-in-out ${longAnimationDurationMs}ms;
  margin-left: 36px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      flex-grow: 1;
    `}
`;
