import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { AutocompleteDropdownItem } from "./AutocompleteDropdownItem";
import { longAnimationDurationMs } from "../../constants/measures";
import { useSelector } from "react-redux";
import { selectHistory } from "../Home/searchSelectors";
import { uniqBy } from "lodash";

export const AutocompleteDropdown = ({
  data,
  selectedItem,
  visible,
  onChooseItem
}) => {
  const [shown, setShown] = useState(false);
  const history = useSelector(selectHistory);

  const normalizedHistory = history
    .filter(item => !!item)
    .map(item => ({ item, history: true }));

  const normalizedData = data
    .slice(0, 7)
    .map(item => ({ item, history: false }));
  console.log(selectedItem);
  useEffect(() => {
    visible && setShown(true);
  }, [visible]);

  const renderData = [...uniqBy(normalizedHistory, "item"), ...normalizedData];

  return (
    visible && !!renderData.length && (
      <Dropdown shown={shown} id={"input"}>
        {renderData.map((item, index) => (
          <AutocompleteDropdownItem
            key={item}
            text={item.item}
            isHistory={item.history}
            selected={selectedItem === index}
            id={"input"}
            onClick={() => onChooseItem(item.item)}
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
  /* min-height: 240px; */
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
