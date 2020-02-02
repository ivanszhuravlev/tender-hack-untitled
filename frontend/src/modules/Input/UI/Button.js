import styled from "styled-components";
import {
  inputHeight,
  longAnimationDurationMs,
  shortAnimationDurationMs
} from "../../../constants/measures";
import { colors } from "../../../constants/colors";

export const Button = styled.button`
  outline: none;
  height: 48px;
  /* height: ${inputHeight}px; */
  border: 0;
  border-radius: 40px;
  padding: 0 48px;
  margin-left: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  background-color: ${colors.button};
  transition: all ease-in-out ${shortAnimationDurationMs}ms;
  cursor: pointer;

  &:hover {
    background-color: ${colors.buttonDark};
  }
`;
