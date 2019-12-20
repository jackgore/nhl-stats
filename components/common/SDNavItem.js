// @flow

import { useRouter } from "next/router";
import React, { type Node } from "react";
import SDText from "./SDText";

import "./css/sd.css";

type Props = {|
  align?: "left" | "right",
  label: string,
  link: string,
|};

function SDNavItem(props: Props): Node {
  const router = useRouter();

  const { label, link } = props;
  return (
    <div className="sd-nav-bar-item" onClick={() => router.push(link)}>
      <SDText size="body1">{label}</SDText>
    </div>
  );
}

export default SDNavItem;
