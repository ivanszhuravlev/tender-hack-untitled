import styled from "styled-components";
import { Card } from "../../../Components/Card";

import { longAnimationDurationMs } from "../../../constants/measures";

export const ResultsCard = styled(Card)`
  margin-top: 12px;
  transition: all ease-in-out ${longAnimationDurationMs}ms
    ${longAnimationDurationMs}ms;
  opacity: ${({ resultsShown }) => (resultsShown === null ? 0 : 1)};
`;
