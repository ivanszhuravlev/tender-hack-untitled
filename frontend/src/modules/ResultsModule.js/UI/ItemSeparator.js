import React from "react";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const ItemSeparator = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* height: 1px; */
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  /* margin: 12px 0; */
`;

const Line = styled.div`
  height: 72px;
  /* border-bottom: 1px solid ${colors.grey}; */
  width: 240px;
`;
