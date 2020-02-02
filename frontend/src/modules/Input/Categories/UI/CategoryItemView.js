import styled from "styled-components";
import {
  longAnimationDurationMs,
  cardMargin
} from "../../../../constants/measures";
import { colors } from "../../../../constants/colors";

export const CategoryItemView = styled.div`
  height: 32px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-right: ${({ hasMargin }) => (hasMargin ? 12 : 0)}px;
  margin-bottom: 12px;

  border: 1px solid ${colors.grey2};
  border-radius: 20px;

  color: ${colors.grey2};
  font-size: 14px;

  cursor: pointer;
`;
