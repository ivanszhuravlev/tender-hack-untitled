import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ItemInfo = ({ name, value, index }) => {
  return (
    <Wrapper index={index}>
      <Name>{name}</Name>
      <Separator />
      <Value>{value}</Value>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: ${({index}) => index === 0 ? 0 : 8}px;
`;
const Name = styled.div``;

const Value = styled.div``;

const Separator = styled.div`
  height: 1;
  border-bottom: 1px dotted ${colors.grey3};
  flex-grow: 1;

  margin: 0 16px;
  box-sizing: border-box;
`;
