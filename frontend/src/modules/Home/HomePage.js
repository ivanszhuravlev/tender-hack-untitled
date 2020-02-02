import React, { useState } from "react";
import { HomeContainer } from "./UI/HomeContainer";
import { InputModule } from "../Input/InputModule";
import { ResultsModule } from "../ResultsModule.js/ResultsModule";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults, setSearchQuery, saveToHistory } from "./searchActions";
import { selectSearchData } from "./searchSelectors";

export const HomePage = () => {
  const [resultsShown, setResultsShown] = useState(null);
  const dispatch = useDispatch();
  const searchData = useSelector(selectSearchData);

  const handleStartFetch = value => {
    console.log('fetch', value)
    const { page } = searchData[value] || {};
    setResultsShown(value.length > 0);
    page === undefined
      ? dispatch(getSearchResults(value, 0))
      : dispatch(setSearchQuery(value));

    dispatch(saveToHistory(value))
  };

  return (
    <HomeContainer>
      <InputModule
        resultsShown={resultsShown}
        onStartFetch={(value) => handleStartFetch(value)}
      />
      <ResultsModule resultsShown={resultsShown} />
    </HomeContainer>
  );
};
