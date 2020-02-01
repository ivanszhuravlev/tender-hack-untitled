import React, { useState } from "react";
import { Input } from "./UI/Input";
import { Card } from "../../Components/Card";
import { InputCard } from "./UI/InputCard";
import { Logo, LogoContainer } from "./UI/Logo";
import LogoIcon from "../../assets/logo.svg";
import { debounce } from "lodash";

export const InputModule = ({ onStartFetch, resultsShown }) => {
  const startSearching = event => {
    const value = event.target.value.trim();
    onStartFetch(value);
  };

  const debouncedStartSearching = debounce(event => startSearching(event), 500);

  const changeHandler = event => {
    event.persist();
    return debouncedStartSearching(event);
  };

  return (
    <InputCard resultsShown={resultsShown}>
      <LogoContainer>
        <Logo src={LogoIcon} />
      </LogoContainer>
      <Input
        placeholder={"Введите поисковый запрос"}
        onChange={changeHandler}
      />
    </InputCard>
  );
};
