import React, { useState, useEffect } from "react";
import { CategoriesCard } from "./UI/CategoriesCard";
import { CategoryItem } from "./CategoryItem";

const data = [
  "aaaaaa",
  "bbbbbb",
  "cccccc",
  "ddddddd",
  "eeeeeee",
  "ffff",
  "gggggg",
  "hhhhhhhhh",
  "iiiiiii",
  "jjjjjj",
  "kkkkk",
  "lllllll",
  "mmmmmm mmmm",
  "nnnn",
  "ooooooo",
  "ppppp pp pppp p"
];

export const CategoriesModule = ({}) => {
  const [opacity, setOpacity] = useState(0);
  // const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);

  return (
    <CategoriesCard opacity={opacity}>
      {data.map((category, index) => (
        <CategoryItem
          text={category}
          key={category}
          hasMargin={index !== data.length - 1}
        />
      ))}
    </CategoriesCard>
  );
};
