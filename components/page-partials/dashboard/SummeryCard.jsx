import Image from "next/image";
import React from "react";

export default function SummeryCard({ label, count, bg, actions }) {
  return (
    <div
      className="col-span-1 h-12.0 w-15.0 px-0.5 py-0.5 bg-blue-600 rounded-md border border-yellow-700"
      style={{
        backgroundImage: `url(${bg.src})`,
        // other styles
      }}
    ></div>
  );
}
