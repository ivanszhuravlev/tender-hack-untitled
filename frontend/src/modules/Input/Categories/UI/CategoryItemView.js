import styled, { css } from "styled-components";
import {
  longAnimationDurationMs,
  cardMargin
} from "../../../../constants/measures";
import { colors } from "../../../../constants/colors";

export const CategoryItemView = styled.div`
  /* height: 32px; */
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* border-radius: 20px; */

  color: ${colors.grey3};
  font-size: 15px;

  border-bottom: 1px solid ${colors.transparent};

  &:hover {
    color: ${colors.button};
  }

  ${({selected}) => selected && css`
    color: ${colors.button};
    border-bottom: 1px solid ${colors.button};

  `}

  cursor: pointer;
`;
