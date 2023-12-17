import React from "react";
import {
  Ban,
  Check,
  CheckCheck,
  CheckSquare,
  Grid3X3,
  ListChecks,
  RefreshCwOff,
} from "lucide-react";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomButton from "@/components/ui-custom/CustomButton";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import CustomSelect from "@/components/ui-custom/CustomSelect";

export default function AddUser() {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        User Registration Form
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
            <label>NID</label>
            <CustomInput type={"text"} ph={"Enter NID"} required={true} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Bank Account</label>
            <CustomInput
              type={"text"}
              ph={"Enter bank account"}
              required={true}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Address</label>
          <textarea
            rows={3}
            placeholder={"Enter address..."}
            className="rounded-md px-0.5 py-0.38 border"
          />
        </div>

        <div className="grid items-end sm:grid-cols-2 grid-cols-1 gap-1.5  ">
          <div className="flex flex-col gap-2">
            <label>Contact No</label>
            <CustomInput
              type={"text"}
              ph={"Enter contact no"}
              required={true}
            />
          </div>

          <CustomSelect
            label="Select Role"
            options={["Admin", "Manager", "Assistant Manager"]}
            ph={""}
          />
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <CustomInput type={"email"} ph={"Enter Email"} required={true} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Username </label>
            <CustomInput
              type={"text"}
              ph={"Give an username"}
              required={true}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <CustomInput
              type={"password"}
              ph={"Enter Password"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Confirm Password</label>
            <CustomInput
              type={"password"}
              ph={"Enter password again"}
              required={true}
            />
          </div>
        </div>

        <hr className="" />

        <div className="flex justify-between my-2">
          <CustomButton
            startIcon={<Ban className="w-5 h-5" />}
            txt={"Reset"}
            style="gap-1 bg-red-600 text-wh px-0.75 text-base font-semibold  py-0.25 rounded-md w-fit "
          />
          <CustomButton
            startIcon={<CheckCheck className="w-5 h-5" />}
            txt={"Submit"}
            style="gap-1 bg-blue-700 text-wh px-0.75 text-base font-semibold  py-0.25 rounded-md w-fit "
          />
        </div>
      </form>
    </div>
  );
}
