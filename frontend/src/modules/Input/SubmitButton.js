import React from "react";
import { Button } from "./UI/Button";

export const SubmitButton = ({ onClick, className }) => {
  return <Button className={className} onClick={onClick}>Найти</Button>;
};
