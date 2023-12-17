import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import React from "react";

export default function StockBulk({ actOn="Supplier", useForEdit }) {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        Add {actOn}
      </EnhancedText>

      <form className="flex flex-col gap-3 text-sm my-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>First Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter first name"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Last Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter first name"}
              required={true}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Address</label>
            <textarea
              rows={2}
              placeholder={"Enter address"}
              className="px-0.5 py-0.38 border"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Company</label>
            <CustomInput type={"text"} ph={"Enter company"} required={true} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Contact No</label>
            <CustomInput
              type={"text"}
              ph={"Enter contact no"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Email</label>
            <CustomInput type={"email"} ph={"Enter email"} required={true} />
          </div>
        </div>

        <CustomButton
          txt={"Submit"}
          style="bg-blue-700 text-wh px-0.75 text-lg font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
