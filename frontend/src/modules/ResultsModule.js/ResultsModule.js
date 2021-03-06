import React, { useState, useEffect } from "react";
import { ResultsCard } from "./UI/ResultsCard";
import { ListView } from "../../Components/ListView";
import { ResultItem } from "./ResultItem";
import { ItemSeparator } from "./UI/ItemSeparator";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSearchDataListByValue,
  selectSearchQuery,
  selectSearchPage
} from "../Home/searchSelectors";
import { ResultEmpty } from "./ResultEmpty";
import { getSearchResults } from "../Home/searchActions";

export const ResultsModule = ({}) => {
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);
  const page = useSelector(selectSearchPage);
  const data = useSelector(selectSearchDataListByValue);
  console.log('select', query)
  useEffect(() => {
    setTimeout(() => setOpacity(1), 200);
  }, []);

  const handleLoad = () => dispatch(getSearchResults(null, page));

  return (
    <ResultsCard opacity={opacity}>
      {data.length ? (
        <ListView
          data={data}
          keyExtractor={({ id }) => `${id}`}
          loaderCallback={handleLoad}
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
  );
};
