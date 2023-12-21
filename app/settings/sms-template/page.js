import AddBrand from "@/components/page-partials/brand/AddBrand";
import SMSTemplate from "@/components/setting/SMSTemplate";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-200   w-full  h-full overflow-y-scroll flex flex-col justify-start ">
      <SMSTemplate />
    </div>
  );
}
