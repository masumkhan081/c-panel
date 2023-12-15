import React from "react";
import EnhancedText from "../ui-custom/EnhancedText";
import Link from "next/link";
import summery from "../../static-data/dashboard-summery";
import SummeryCard from "../page-partials/dashboard/SummeryCard";

export default function Home() {
  return (
    <div className=" bg_sl_1 w-full  flex flex-col gap-5 justify-center items-center border-2 border-red-700">
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1   ">
        {summery.map((item) => {
          return (
            <SummeryCard
              label={item.label}
              bg={item.bg}
              actions={item.actions}
              count={item.count}
            />
          );
        })}
      </div>
    </div>
  );
}
