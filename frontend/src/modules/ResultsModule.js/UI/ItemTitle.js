import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { shortAnimationDurationMs } from "../../../constants/measures";

export const ItemTitle = styled.a`
  font-size: 18px;
  color: ${colors.text1};
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid ${colors.transparent};
  transition: all ease-in-out ${shortAnimationDurationMs}ms;

  &:hover {
    border-bottom: 1px solid ${colors.text1};
  }

  &:visited {
    color: ${colors.text2};
    border-bottom: 1px solid ${colors.text2};

    &:hover {
      border-bottom: 1px solid ${colors.text2};
    }
  }
`;
