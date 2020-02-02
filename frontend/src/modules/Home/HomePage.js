import React, { useState } from "react";
import styled from "styled-components";
import { HomeContainer } from "./UI/HomeContainer";
import { InputModule } from "../Input/InputModule";
import { ResultsModule } from "../ResultsModule.js/ResultsModule";
import { useDispatch } from "react-redux";
import { getSearchResults } from "./searchActions";

export const HomePage = () => {
  const [resultsShown, setResultsShown] = useState(null);
  const dispatch = useDispatch()

  const handleStartFetch = value => {
    setResultsShown(value.length > 0);
    dispatch(getSearchResults(value))
  };

  return (
    <HomeContainer>
      <InputModule
        resultsShown={resultsShown}
        onStartFetch={handleStartFetch}
      />
      <ResultsModule resultsShown={resultsShown} />
    </HomeContainer>
  );
};
