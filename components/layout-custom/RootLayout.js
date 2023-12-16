"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SideNav from "../nav/SideNav";
import TopNav from "../nav/TopNav";
import Footer from "../page-partials/other/Footer";
import { usePathname } from "next/navigation";
//
export default function RootLayout({ content }) {
  const [sideNavHidden, setSideNav] = useState(false);
  const view = () => (sideNavHidden ? " hidden" : "block");

  const path = usePathname();
  return (
    <div className="flex min-h-screen w-full ">
      {path.endsWith("login") === false && (
        <>
          <div className={`${view()}    h-screen `}>
            <SideNav sideNavHidden={sideNavHidden} />
          </div>

          <div className="flex flex-grow flex-col justify-between w-full h-screen  ">
            <TopNav />
            {content}
            <Footer />
          </div>
        </>
      )}
      {path.endsWith("login") === true && <>{content}</>}
    </div>
  );
}
