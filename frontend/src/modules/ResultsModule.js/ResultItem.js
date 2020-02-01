import React from "react";
import { ItemContainer } from "./UI/ItemContainer";
import image from "../../assets/item.svg";
import { ItemContent } from "./UI/ItemContent";
import { ItemTop } from "./UI/ItemTop";
import { ItemBottom } from "./UI/ItemBottom";
import { ItemTitle } from "./UI/ItemTitle";
import { ItemPrice } from "./UI/ItemPrice";
import { ItemImage } from "./UI/ItemImage";
import { ItemInfo } from "./ItemInfo";

export const ResultItem = ({ title = "", price = "", data = {} }) => {
  console.log("data", data);
  return (
    <ItemContainer>
      <ItemImage src={image} />
      <ItemContent>
        <ItemTop>
          <ItemTitle>{title}</ItemTitle>
          <ItemPrice>{price}</ItemPrice>
        </ItemTop>
        <ItemBottom>
          {Object.keys(data).map((key, index) => (
            <ItemInfo key={key} name={key} value={data[key]} index={index} />
          ))}
        </ItemBottom>
      </ItemContent>
    </ItemContainer>
  );
};
