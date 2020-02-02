import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { AutocompleteDropdownItem } from "./AutocompleteDropdownItem";
import { longAnimationDurationMs } from "../../constants/measures";

export const AutocompleteDropdown = ({ data, selectedItem, visible, onChooseItem }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    visible && setShown(true)
  }, [visible]);

  return (
    visible && (
      <Dropdown shown={shown} id={"input"}>
        {data.map((item, index) => (
          <AutocompleteDropdownItem
            key={item}
            text={item}
            selected={selectedItem === index}
            id={"input"}
            onClick={() => onChooseItem(item)}
          />
        ))}
      </Dropdown>
    )
  );
};

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 240px;
  border-radius: 20px;

  margin-top: 52px;

  background-color: ${colors.white};
  /* box-shadow: 0px 8px 4px 0px ${colors.shadow}; */
  border: 1px solid ${colors.grey2};

  z-index: 999999;
  padding: 8px 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  /* overflow-y: scroll;
  overflow-x: hidden; */
  overflow: hidden;
  transition: all ease-in-out ${longAnimationDurationMs}ms;

  opacity: ${({ shown }) => (shown ? 1 : 0)};
`;
