"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "../../../static-data/product-groups";
import React, { useState } from "react";
import { Check, Image, Layers2, Plus, Search, X } from "lucide-react";
import SearchWithSelect from "@/components/ui-custom/SearchWithSelect";
import Badge from "@/components/ui-custom/Badge";
import SearchThenSelect from "@/components/ui-custom/SearchThenSelect";
import TblProductInPos from "@/components/tabular-view/TblProductInPos";

export default function CreatePos({ actOn, useForEdit }) {
  const prdcts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedCustomer, setCustomer] = useState("Walk-In Customer");

  function today() {
    let date = new Date();
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  return (
    <div className=" bg-slate-200 rounded-md px-1.0 pb-1.0 flex flex-col gap-0.5 fixed bottom-[38px]">
      {/*  top tool bar */}
      <div className="flex justify-between p-0.25 ">
        {/* date and shhop name */}

        <p className="flex gap-1.0">
          {/* <span className="font-semibold">Location:</span>
          <span className="italic">HR It</span>{" "} */}
          <span className="drop-shadow-md text-blue-900 font-mono font-semibold">
            {today()}
          </span>
        </p>

        {/* quick tools */}
        <div className="flex gap-1">
          <Badge txt={"Quick Move:"} />
          <CustomButton
            startIcon={<Layers2 className="text-green-600" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-amber-700" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-yellow-600" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-cyan-700" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-emerald-700" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-wh" />}
            style={"p-0.125 border rounded-md bg-slate-500"}
          />
        </div>
      </div>

      {/* container below top toolbar */}
      <div className="flex-grow grid grid-cols-5 gap-0.75 ">
        {/* pos -> tabule */}
        <div className="col-span-3 bg-wh flex flex-col gap-0.5 p-0.5 rounded-sm">
          <div className="grid content-center sm:grid-cols-5 grid-cols-1 gap-1.5 items-center">
            <div className="col-span-2 h-[40px]">
              <SearchWithSelect
                value={selectedCustomer}
                options={["Walk-In Customer"]}
                // label="Select Customer"
                onChange={(opt) => setCustomer(opt)}
              />
            </div>
            <div className="col-span-3 h-[40px]">
              <div className="flex border border-slate-300 rounded-md">
                <span className="p-0.25 bg-slate-200">
                  <Search className="w-5 h-5 " />
                </span>
                <input type="text" className="flex-grow p-0.25"></input>
                <CustomButton
                  startIcon={<Plus className="w-5 h-5 " />}
                  style="bg-slate-300 px-0.25"
                />
              </div>
              {/* <SearchThenSelect /> */}
            </div>
          </div>
          <div>
            <TblProductInPos />
          </div>
          {/*  table footer */}
          <div>


          </div>
        </div>

        {/* product list with scrolling */}
        <div className="col-span-2 bg-slate-200 flex flex-col gap-2 px-0.5 rounded-sm">
          {/* category and brand selection */}
          <div className="flex gap-2">
            <SearchWithSelect
              value={selectedCategory}
              bg={"light"}
              options={[
                "All Categories",
                "Accessories",
                "Books",
                "Electronics",
              ]}
              // label="Select Customer"
              onChange={(opt) => setSelectedCategory(opt)}
            />
            <SearchWithSelect
              bg={"light"}
              value={selectedBrand}
              options={["All Brands", "Acer", "Adidas", "Apple"]}
              // label="Select Customer"
              onChange={(opt) => setSelectedBrand(opt)}
            />
          </div>

          <div className="flex gap-2 flex-wrap overflow-y-scroll max-h-[350px] py-0.75 ">
            {prdcts.map((item, ind) => {
              return (
                <button
                  key={ind}
                  className="max-w-[120px] p-0.5 rounded-md flex flex-wrap  flex-col items-center justify-center gap-1 bg-wh"
                >
                  <Image className="w-12 h-12" />
                  <span>{"Apache Something (AS001@ 12)"}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* container of sticky footer section */}
      {/* <div className=" py-0.25 px-1.0 border border-red-900 flex mx-auto justify-center gap-0.75 fixed bottom-[40px]">
        <CustomButton startIcon={<X />} />
        <CustomButton startIcon={<X />} />
        <CustomButton startIcon={<X />} />
         
      </div> */}
    </div>
  );
}
