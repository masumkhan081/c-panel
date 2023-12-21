"use client"
import React from "react";
import EnhancedText from "../ui-custom/EnhancedText";

export default function SMSTemplate() {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        <span className="font-bold">Settings:</span> SMTP Temlate
      </EnhancedText>
    </div>
  );
}
