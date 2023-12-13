import React from "react";

export default function CustomInput({
  type,
  required,
  value,
  ph,
  afterChange,
  afterHover,
  startIcon,
  endIcon,
}) {
  return (
    <div className="flex rounded-md border border-slate-300">
      <span className="bg-slate-200 py-0.25 px-0.5 border-r rounded-r-sm border-slate-300">
        {startIcon}
      </span>
      <input
        type={type}
        required={true}
        placeholder={ph}
        className="flex-grow py-1 px-0.25 outline-blue-300 rounded-md"
        value={value}
        onChange={afterChange}
      ></input>
      {endIcon && (
        <span className="bg-slate-200 py-0.25 px-0.5 border-s rounded-s-sm border-slate-300">
          {endIcon}
        </span>
      )}
    </div>
  );
}
