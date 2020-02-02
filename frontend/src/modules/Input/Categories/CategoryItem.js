import React from "react";
import { CategoryItemView } from "./UI/CategoryItemView";

export const CategoryItem = ({ text, hasMargin }) => {
  return <CategoryItemView hasMargin={hasMargin}>{text}</CategoryItemView>;
};
