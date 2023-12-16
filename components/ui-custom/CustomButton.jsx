import React from "react";

export default function CustomButton({
  id,
  txt,
  style,
  afterClick,
  afterHover,
  startIcon,
  endIcon,
}) {
  return (
    <button id={id} className={`flex   ${style} `} onClick={afterClick} onMouseOver={afterHover}>
      {startIcon}
      {txt}
      {endIcon}
    </button>
  );
}
