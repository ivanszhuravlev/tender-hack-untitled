import styled from "styled-components";
import { Card } from "../../../Components/Card";

import { longAnimationDurationMs, cardMargin, inputHeight, inputPaddingTop } from "../../../constants/measures";

export const ResultsCard = styled(Card)`
  margin-top: ${cardMargin}px;
  transition: all ease-in-out ${longAnimationDurationMs}ms
    ${longAnimationDurationMs}ms;
  opacity: ${({ opacity }) => opacity};
  margin-bottom: ${cardMargin}px;
`;
