// @flow

import React, { type Node } from "react";

import "./css/sd.css";

type Props = {|
  children: Node,
|};

function SDNav(props: Props): Node {
  const { children } = props;

  return <div className="sd-nav-bar sd-nav-bar-blue">{children}</div>;
}

export default SDNav;
