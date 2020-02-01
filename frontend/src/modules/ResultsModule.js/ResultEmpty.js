import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ResultEmpty = () => {
  return <EmptyContainer>Ничего не найдено</EmptyContainer>;
};

const EmptyContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px 0;
  font-size: 24px;
  font-weight: 100;
  color: ${colors.text2};
`;
