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
    alert("😂");
  }

  return (
    <div className="h-26.0 min-w-35.0 bg-wh rounded-md border border-slate-300 flex ">
      <form className=" flex flex-col gap-1.5 px-3.0 py-3.5 h-full rounded-s-md">
        <EnhancedText kind="one" color="text-pr">
          Login
        </EnhancedText>

        <span className="text-sm text-neutral-400">
          Sign In to your account
        </span>
        <CustomInput
          type={"text"}
          required={true}
          ph="Username"
          value={userName}
          afterChange={(e) => setUName(e.target.value)}
          startIcon={<User className="cmn_icon_style" />}
        />
        <CustomInput
          type={"password"}
          required={true}
          ph="Password"
          value={passwrod}
          afterChange={(e) => setPassword(e.target.value)}
          startIcon={<Lock className="cmn_icon_style" />}
          endIcon={<Eye className="cmn_icon_style" />}
        />

        <div className="flex justify-between items-center">
          <CustomButton
            txt="Login"
            afterClick={handleSubmit}
            style="bg-blue-700 text-wh px-1.0 py-0.25 rounded-md"
          />
          <CustomButton
            txt="Forgot Password"
            afterClick={()=>alert("dumb front end")}
            style={
              "rounded-md text-blue-700 drop-shadow-md text-sm hover:underline"
            }
          />
        </div>
      </form>
      <div className="  md:flex hidden flex-col gap-1.5 justify-center items-start px-3.0 py-3.5 rounded-e-md bg-blue-800 text-wh">
        <p className="text-wh font-semibold drop-shadow-md text-2xl ">
          Laptop Plaza
        </p>
        <p className="text-sm">The Worlds Largest Laptop Distributor</p>
        <p className="flex flex-wrap gap-1 italic text-sm">
          <span className="">Developed By</span>
          <span className="font-bold">Softronixs ltd</span>
        </p>
      </div>
    </div>
  );
}
