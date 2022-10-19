import React, { useState } from "react";
import "../styles/child.css";

const Selection = ({ applyColor }) => {
  const [selectionStyle, updateSelectionStyle] = useState({});
  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => {
        applyColor(updateSelectionStyle);
      }}
    >
      <h2 className="subHeading">Selection</h2>
    </div>
  );
};
export default Selection;
