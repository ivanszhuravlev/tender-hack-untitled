import styled from "styled-components";
import { Card } from "../../../Components/Card";

import {
  inputHeight,
  inputPaddingTop,
  vHeight,
  longAnimationDurationMs
} from "../../../constants/measures";

const marginCentral = vHeight / 2 - inputHeight / 2 - inputPaddingTop;

export const InputCard = styled(Card)`
  padding: 12px 24px;
  position: relative;
  flex-direction: row;
  align-items: center;
  transition: all ease-in-out ${longAnimationDurationMs}ms;
  margin-top: ${({ isEmpty }) => (isEmpty === null ? marginCentral : 12)}px;
`;
