import React, { useState } from "react";
import { Input } from "./UI/Input";
import { Card } from "../../Components/Card";
import { InputCard } from "./UI/InputCard";
import { Logo, LogoContainer } from "./UI/Logo";
import LogoIcon from "../../assets/untitled.jpg";
import { debounce } from "lodash";

export const InputModule = ({}) => {
  const [isEmpty, setIsEmpty] = useState(null);

  const startSearching = event => {
    const value = event.target.value.trim();
    setIsEmpty(value.length === 0);
  };

  const debouncedStartSearching = debounce(event => startSearching(event), 500);

  const changeHandler = event => {
    event.persist();
    return debouncedStartSearching(event);
  };

  return (
    <InputCard isEmpty={isEmpty}>
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
