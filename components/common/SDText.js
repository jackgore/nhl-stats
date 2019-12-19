// @flow

import React, { type Node } from "react";

import "./css/sd.css";

type FontSize = $Keys<typeof FONT_SIZES>;

type Props = {|
  children: string,
  size?: FontSize,
  weight?: "bold",
|};

// Maps provided FontSize to a size in pixels (e.g px).
const FONT_SIZES = {
  header1: 32,
  header2: 24,
  header3: 18,
  body1: 16,
  body2: 14,
  body3: 12,
};

function SDText(props: Props): Node {
  const { children, size, weight } = props;

  // Styles for describing how the text is presented.
  const style = {
    fontSize: FONT_SIZES[size ?? "header1"],
    fontWeight: weight,
  };

  return (
    <div className="sd-text" style={style}>
      {children}
    </div>
  );
}

export default SDText;
