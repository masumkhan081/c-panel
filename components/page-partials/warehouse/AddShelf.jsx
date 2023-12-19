import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "../../../static-data/product-groups";
import React from "react";
import { Check } from "lucide-react";

export default function AddWarehouse({ actOn, useForEdit }) {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        Add Shelf
      </EnhancedText>

      <form className="flex flex-col gap-4 text-sm my-4">
        <div className="sm:w-1/2 w-full flex flex-col gap-2">
          <label>Warehouse</label>
          <CustomSelect label={"Select Warehouse"} option={[]} />
        </div>

        <div className="sm:w-1/2 w-full flex flex-col gap-2">
          <label>Shelf Name</label>
          <CustomInput type={"text"} ph={"Enter shelf name"} required={true} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            rows={3}
            placeholder={"Enter description"}
            className="px-0.5 py-0.38 border rounded-md"
          />
        </div>

        <CustomButton
          startIcon={<Check className="w-5 h-5" />}
          txt={"Submit"}
          style="bg-blue-700 text-wh px-0.75 text-base font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
