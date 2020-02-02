import React, { useState, useEffect } from "react";
import { CategoriesCard } from "./UI/CategoriesCard";
import { CategoryItem } from "./CategoryItem";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

const data = [
  { title: "aaaaaa", count: 12 },
  { title: "bbbbbb", count: 12 },
  { title: "cccccc", count: 12 },
  { title: "ddddddd", count: 12 },
  { title: "eeeeeee", count: 12 },
  { title: "ffff", count: 12 },
  { title: "gggggg", count: 12 },
  { title: "hhhhhhhhh", count: 12 },
  { title: "iiiiiii", count: 12 },
  { title: "jjjjjj", count: 12 },
  { title: "kkkkk", count: 12 },
  { title: "lllllll", count: 12 },
  { title: "mmmmmm mmmm", count: 12 },
  { title: "nnnn", count: 12 },
  { title: "ooooooo", count: 12 },
  { title: "ppppp pp pppp p", count: 12 }
];

export const CategoriesModule = ({}) => {
  const [opacity, setOpacity] = useState(0);
  // const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);

  return (
    <CategoriesCard opacity={opacity}>
    <Title>Выберите категории</Title>
      <CategoriesList>
        {data.map((category, index) => (
          <CategoryItem
            text={category.title}
            count={category.count}
            key={category.title}
            hasMargin={index !== data.length - 1}
          />
        ))}
      </CategoriesList>
    </CategoriesCard>
  );
};

const CategoriesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title= styled.div`
  font-size: 28px;
  color: ${colors.grey3};
  font-weight: 100;
  margin-bottom: 28px;
`