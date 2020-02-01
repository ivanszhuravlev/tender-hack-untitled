import styled from "styled-components";
import { Card } from "../../../Components/Card";

import {
  inputHeight,
  inputPaddingTop,
  vHeight,
  longAnimationDurationMs,
  gridWidth
} from "../../../constants/measures";

const marginCentral = vHeight / 2 - inputHeight / 2 - inputPaddingTop;

export const InputCard = styled(Card)`
  padding: 12px 24px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all ease-in-out ${longAnimationDurationMs}ms;
  margin-top: ${({ resultsShown }) =>
    resultsShown === null ? marginCentral : 12}px;

  border-radius: 40px;
`;
