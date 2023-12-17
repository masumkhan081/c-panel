import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function AddProduct({ actOn, useForEdit }) {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        Add Product
      </EnhancedText>

      <form className="flex flex-col gap-4 text-sm my-4">
        <CustomSelect
          label="Search and select product model"
          options={productGroups}
        />

        <div className="grid grid-cols-7  gap-1.5">
          <div className="md:col-span-3 sm:col-span-4 col-span-7 flex flex-col gap-2">
            <label>Product Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter first name"}
              required={true}
            />
          </div>

          <div className="md:col-span-2 sm:col-span-3 col-span-7 col flex flex-col gap-2">
            <label>Stock Notify</label>

            <CustomInput type={"number"} required={true} />
          </div>
          <div className="md:col-span-2 sm:col-span-3 col-span-7 flex flex-col gap-2">
            <label>Sale Price</label>
            <CustomInput type={"number"} required={true} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            rows={4}
            placeholder={"Enter address"}
            className="px-0.5 py-0.38 border"
          />
        </div>

        <CustomButton
          startIcon={<CheckCheck className="w-4 h-4 mr-1" />}
          txt={"Submit"}
          style="bg-blue-900 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
