import React from "react";

export default function Badge({txt}) {
  return <span className=" bg-teal-700 text-slate-100 text-sm py-0.125 px-0.25 rounded-md ">
   {
      txt
   }
  </span>;
}
