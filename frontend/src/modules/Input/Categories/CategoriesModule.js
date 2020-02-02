import React, { useState, useEffect } from "react";
import { CategoriesCard } from "./UI/CategoriesCard";
import { CategoryItem } from "./CategoryItem";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

const data = [
  { title: "Бумажная продукция", count: 12 },
  { title: "Счетчики", count: 10 },
  { title: "Офисное оборудование", count: 6 },
  { title: "Хозяйственное оборудование", count: 3 },
  { title: "Оборудование для уборки", count: 1 },
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