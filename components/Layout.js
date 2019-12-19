// @flow

import React, { type Node } from "react";
import SDNav from "./common/SDNav";
import SDNavItem from "./common/SDNavItem";

import "../css/global.css";

type Props = {|
  children: Array<Node>,
|};

function Layout(props: Props): Node {
  const { children } = props;

  return (
    <>
      <SDNav>
        <SDNavItem label="Teams" />
      </SDNav>
      <div>{children}</div>
    </>
  );
}

export default Layout;
