import React, { useState, useEffect } from "react";
import { ResultsCard } from "./UI/ResultsCard";
import { ListView } from "../../Components/ListView";
import { ResultItem } from "./ResultItem";
import { ItemSeparator } from "./UI/ItemSeparator";
import { useSelector } from "react-redux";
import { selectSearchDataByValue } from "../Home/searchSelectors";
import { ResultEmpty } from "./ResultEmpty";

const testData = [
  {
    id: 1,
    title: "Shnurki",
    price: "12p",
    data: {
      aaaaa: "jksdfsd",
      bbbbb: "jksdfsd",
      cc: "jksdfsd",
      dddddddd: "jksdfsd"
    }
  },
  {
    id: 2,
    title: "Pirozhok",
    price: "34p",
    data: {
      aaaaa: "jksdfsd",
      bbbbb: "jksdfsd",
      cc: "jksdfsd",
      dddddddd: "jksdfsd"
    }
  },
  {
    id: 3,
    title: "Pokemon",
    price: "142p",
    data: {
      aaaaa: "jksdfsd",
      bbbbb: "jksdfsd",
      cc: "jksdfsd",
      dddddddd: "jksdfsd"
    }
  }
];

export const ResultsModule = ({ resultsShown }) => {
  const [opacity, setOpacity] = useState(0);

  const data = useSelector(selectSearchDataByValue);
  console.log("data", data);
  useEffect(() => {
    setOpacity(resultsShown === null ? 0 : 1);
  }, [resultsShown]);

  return (
    resultsShown && (
      <ResultsCard opacity={opacity}>
        {data.length ? (
          <ListView
            data={data}
            keyExtractor={({ id }) => `${id}`}
            renderItem={(
              { title, category, subCategory, id, ...data },
              index
            ) => (
              <>
                {index !== 0 && <ItemSeparator />}
                <ResultItem
                  title={title}
                  category={category}
                  subCategory={subCategory}
                  data={data}
                />
              </>
            )}
          />
        ) : (
          <ResultEmpty />
        )}
      </ResultsCard>
    )
  );
};
