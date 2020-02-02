import React, { useState, useEffect } from "react";
import { Input, InputContainer } from "./UI/Input";
import { Card } from "../../Components/Card";
import { InputCard } from "./UI/InputCard";
import { Logo, LogoContainer } from "./UI/Logo";
import LogoIcon from "../../assets/logo.svg";
import { debounce } from "lodash";
import { SubmitButton } from "./SubmitButton";
import { FormContainer } from "./UI/FormContainer";
import { AutocompleteDropdown } from "../ResultsModule.js/AutocompleteDropdown";

const data = ["one", "rwo", "three", "four", "five", "six", "seven"];
const keyUp = 38;
const keyDown = 40;

export const InputModule = ({ onStartFetch, resultsShown }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);

  const clickListener = (e) => {
    // console.log(e.target.id)
    e.target.id !== "input" && setIsDropdownVisible(false);
  }

  useEffect(() => {
    document.addEventListener('click', clickListener)
  }, [])

  const startSearching = event => {
    const value = event.target.value.trim();
    // onStartFetch(value);
    setIsDropdownVisible(true);
  };

  const submitHandler = passedValue => {
    const val = passedValue || value;
    console.log(val);
    val.trim().length && onStartFetch(value.trim());
    setIsDropdownVisible(false);
  };

  const debouncedStartSearching = debounce(event => startSearching(event), 500);

  const changeHandler = event => {
    event.persist();
    setValue(event.target.value);
    return debouncedStartSearching(event);
  };

  const focusHandler = () => {
    setIsDropdownVisible(true);
    return setIsFocused(true);
  };

  // const blurHandler = () => setIsDropdownVisible(false);

  const handleChooseItem = item => {
    submitHandler(item);
    setValue(item);
  };

  const handleKeyPress = ({ keyCode }) => {
    if (keyCode === 13) {
      const dataToSubmit =
        selectedDropdownItem !== null && data[selectedDropdownItem];
      submitHandler(dataToSubmit);
      dataToSubmit && setValue(dataToSubmit);
    }

    keyCode === keyUp &&
      setSelectedDropdownItem(
        !selectedDropdownItem ? 0 : selectedDropdownItem - 1
      );
    keyCode === keyDown &&
      setSelectedDropdownItem(
        selectedDropdownItem === null ? 0 : selectedDropdownItem + 1
      );
  };

  return (
    <>
      <InputCard resultsShown={resultsShown}>
        <LogoContainer>
          <Logo src={LogoIcon} />
        </LogoContainer>
        <FormContainer>
          <InputContainer isFocused={isFocused}>
            <Input
              placeholder={"Введите поисковый запрос"}
              onChange={changeHandler}
              onFocus={focusHandler}
              onKeyDown={handleKeyPress}
              isFocused={isFocused}
              value={value}
              // onBlur={blurHandler}
              id={"input"}
            />
            <AutocompleteDropdown
              data={data}
              visible={isDropdownVisible}
              selectedItem={selectedDropdownItem}
              onChooseItem={handleChooseItem}
              id={"input"}
            />
          </InputContainer>
          <SubmitButton onClick={submitHandler} />
        </FormContainer>
      </InputCard>
    </>
  );
};
