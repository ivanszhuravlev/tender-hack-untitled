import React from "react";
import { ResultsCard } from "./UI/ResultsCard";
import { ListView } from "../../Components/ListView";
import { ResultItem } from "./ResultItem";
import { ItemSeparator } from "./UI/ItemSeparator";

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
  return (
    <ResultsCard resultsShown={resultsShown}>
      <ListView
        data={testData}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ title, price, data }, index) => (
          <>
            {index !== 0 && <ItemSeparator />}
            <ResultItem title={title} price={price} data={data} />
          </>
        )}
      />
    </ResultsCard>
  );
};
