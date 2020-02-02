import styled, { css } from "styled-components";
import { colors } from "../../../constants/colors";
import { longAnimationDurationMs } from "../../../constants/measures";

export const Input = styled.input`
  width: 400px;
  height: 48px;
  border: 1px solid ${colors.grey};

  margin-left: 36px;
  padding: 0 28px;
  font-size: 19px;
  font-weight: 100;
  outline: none;
  box-sizing: border-box;
  border-radius: 30px;
  transition: all ease-in-out ${longAnimationDurationMs}ms;

  ${({isFocused}) => isFocused && css`
    flex-grow: 1;
    border: 1px solid ${colors.grey2};
  `}
`;
