import styled from "styled-components";
import {
  longAnimationDurationMs,
  cardMargin,
  inputHeight,
  inputPaddingTop
} from "../../../../constants/measures";
import { Card } from "../../../../Components/Card";

export const CategoriesCard = styled(Card)`
  margin-top: ${cardMargin}px;
  transition: all ease-in-out ${longAnimationDurationMs}ms
    ${longAnimationDurationMs}ms;
  opacity: ${({ opacity }) => opacity};
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  padding: 36px 48px 24px 48px;
`;
