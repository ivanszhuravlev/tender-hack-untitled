import styled from "styled-components";
import { gridWidth } from "../constants/measures";
import { colors } from "../constants/colors";

export const Card = styled.div`
  width: ${gridWidth}px;
  height: auto;
  box-sizing: border-box;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 12px;
`;
