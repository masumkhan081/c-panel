import React from "react";

export default function EnhancedText({ children, kind, color }) {
  const style = {
    one: "text-2xl font-semibold",
    two: "text-xl font-semibold",
    three: "text-lg font-semibold",
    four: "text-base font-semibold",
    five: "text-base font-normal",
    mute: "text-sm text-neutral-500 font-normal text-sm",
  };

  return <p className={`${style[kind]} ${color}   `}>{children}</p>;
}
