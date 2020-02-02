import React, { useState, useEffect } from "react";
import { CategoriesCard } from "./UI/CategoriesCard";

export const CategoriesModule = ({}) => {
  const [opacity, setOpacity] = useState(0);
  // const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);

  return <CategoriesCard opacity={opacity}>cats</CategoriesCard>;
};
