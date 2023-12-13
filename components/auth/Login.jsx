"use client";

import React, { useState } from "react";
import EnhancedText from "../ui-custom/EnhancedText";
import CustomInput from "../ui-custom/CustomInput";
import CustomButton from "../ui-custom/CustomButton";
import { User, Eye, Lock } from "lucide-react";

export default function Login() {
  const [userName, setUName] = useState("");
  const [passwrod, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="h-26.0 w-35.0 bg-wh rounded-md border border-slate-300 flex ">
      <form className="w-4/7 flex flex-col gap-4 px-3.0 py-3.5 bg-wh h-full">
        <EnhancedText kind="one">Login</EnhancedText>
        <CustomInput
          type={"text"}
          ph="Username"
          value={userName}
          afterChange={(e) => setUName(e.target.value)}
          startIcon={<User />}
        />
        <CustomInput
          type={"password"}
          ph="Password"
          value={passwrod}
          afterChange={(e) => setPassword(e.target.value)}
          startIcon={<Lock />}
          endIcon={<Eye />}
        />

        <div className="flex justify-between">
          <CustomButton txt="Login" afterClick={handleSubmit} style="bg-blue-700 text-wh px-1.0 py-0.25 rounded-md"/>
          <CustomButton txt="Forgot Password" afterClick={handleSubmit} />
        </div>
      </form>
      <div className="w-3/7 flex flex-col gap-4 justify-center items-center px-3.0 py-3.5 bg-blue-600 ">
        <EnhancedText kind="one" color="text-wh">
          Laptop Plaza
        </EnhancedText>
        <EnhancedText kind="three" color="text-wh">
          The Worlds Largest Laptop Distributor
        </EnhancedText>
        <p className="flex gap-1 ">
          <EnhancedText kind="four" color="text-wh">
            Developed By
          </EnhancedText>
          <EnhancedText kind="four" color="text-wh">
            Softronixs ltd
          </EnhancedText>
        </p>
      </div>
    </div>
  );
}
