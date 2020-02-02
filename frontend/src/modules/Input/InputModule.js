import React, { useState } from "react";
import { Input } from "./UI/Input";
import { Card } from "../../Components/Card";
import { InputCard } from "./UI/InputCard";
import { Logo, LogoContainer } from "./UI/Logo";
import LogoIcon from "../../assets/logo.svg";
import { debounce } from "lodash";
import { SubmitButton } from "./SubmitButton";
import { FormContainer } from "./UI/FormContainer";

export const InputModule = ({ onStartFetch, resultsShown }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const startSearching = event => {
    const value = event.target.value.trim();
    onStartFetch(value);
  };

  const submitHandler = () => value.trim().length && onStartFetch(value.trim());

  const debouncedStartSearching = debounce(event => startSearching(event), 500);

  const changeHandler = event => {
    event.persist();
    setValue(event.target.value);
    // return debouncedStartSearching(event);
  };

  const focusHandler = () => setIsFocused(true);

  const handleKeyPress = ({ keyCode }) => keyCode === 13 && submitHandler();

  return (
    <InputCard resultsShown={resultsShown}>
      <LogoContainer>
        <Logo src={LogoIcon} />
      </LogoContainer>
      <FormContainer>
        <Input
          placeholder={"Введите поисковый запрос"}
          onChange={changeHandler}
          isFocused={isFocused}
          onFocus={focusHandler}
          onKeyDown={handleKeyPress}
        />
        <SubmitButton onClick={submitHandler} />
      </FormContainer>
    </InputCard>
  );
};
