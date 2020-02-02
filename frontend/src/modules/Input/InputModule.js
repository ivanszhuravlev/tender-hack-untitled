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
import { ApiService, ENDPOINTS } from "../../services/ApiService";

const data = ["one", "rwo", "three", "four", "five", "six", "seven"];
const keyUp = 38;
const keyDown = 40;

export const InputModule = ({
  onStartFetch,
  resultsShown,
  // fetchAutocomplete
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const [autocompleteData, setAutocompleteData] = useState([])

  const clickListener = e => {
    // console.log(e.target.id)
    e.target.id !== "input" && setIsDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener("click", clickListener);
  }, []);

  const startSearching = async event => {
    const value = event.target.value.trim();
    // onStartFetch(value);
    // fetchAutocomplete(value)
    setAutocompleteData(await ApiService(ENDPOINTS.autocomplete)(value));
    setIsDropdownVisible(true);
  };

  const submitHandler = passedValue => {
    const val = passedValue || value;
    console.log(val);
    val.trim().length && onStartFetch(val);
    setIsDropdownVisible(false);
    setSelectedDropdownItem(null);
  };

  // const debouncedStartSearching = debounce(event => startSearching(event), 10);

  const changeHandler = event => {
    event.persist();
    setValue(event.target.value);
    // return debouncedStartSearching(event);
    startSearching(event)
  };

  const focusHandler = () => {
    setIsDropdownVisible(true);
    return setIsFocused(true);
  };

  // const blurHandler = () => setIsDropdownVisible(false);

  const handleChooseItem = item => {
    console.log("item", item);
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
              data={autocompleteData}
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
