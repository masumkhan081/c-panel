import React from "react";

export default function CustomInput({
  type,
  value,
  ph,
  afterChange,
  afterHover,
  startIcon,
  endIcon,
}) {
  return (
    <div className="flex rounded-md border border-slate-300">
      <span className="bg-slate-200  p-0.25 border-r border-slate-400">
        {startIcon}
      </span>
      <input
        type={type}
        placeholder={ph}
        className="py-1"
        value={value}
        onChange={afterChange}
      ></input>
      {endIcon && (
        <span className="bg-slate-200 p-0.25  border-s border-slate-400">
          {endIcon}
        </span>
      )}
    </div>
  );
}
