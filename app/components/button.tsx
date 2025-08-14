import React from "react";
import { Button } from "@mui/material";

type Props = {
  text: string;
};

const ButtonClass = (props: Props) => {
  return <Button>{props.text}</Button>;
};
