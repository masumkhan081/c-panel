import StockBulk from "@/components/page-partials/stock/StockBulk";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-200 w-full h-full overflow-y-scroll flex flex-col justify-center">
      <StockBulk useForEdit={false} />
    </div>
  );
}
