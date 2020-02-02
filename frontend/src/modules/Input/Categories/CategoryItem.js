import React, { useState } from "react";
import { CategoryItemView } from "./UI/CategoryItemView";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const CategoryItem = ({ text, count, hasMargin }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => setSelected(!selected);

  return (
    <ItemWrapper hasMargin={hasMargin}>
      <CategoryItemView selected={selected} onClick={handleClick}>{text}</CategoryItemView>
      <Count>{count}</Count>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${({ hasMargin }) => (hasMargin ? 24 : 0)}px;
  margin-bottom: 12px;
`;
const Count = styled.div`
  margin-left: 4px;
  border: 0;
  border-radius: 20px;
  background-color: ${colors.button};
  color: ${colors.white};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
`;
