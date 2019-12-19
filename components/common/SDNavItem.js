// @flow

import React, { type Node } from "react";
import SDText from "./SDText";

import "./css/sd.css";

type Props = {|
  align?: "left" | "right",
  label: string,
|};

function SDNavItem(props: Props): Node {
  const { label } = props;

  return <SDText size="body1">{label}</SDText>;
}

export default SDNavItem;
