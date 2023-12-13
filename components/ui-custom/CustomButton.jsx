import React from "react";

export default function CustomButton({
  txt,
  style,
  afterClick,
  afterHover,
  startIcon,
  endIcon,
}) {
  return (
    <button className={`flex justify-between ${style} `} onClick={afterClick}>
      {startIcon}
      {txt}
      {endIcon}
    </button>
  );
}
