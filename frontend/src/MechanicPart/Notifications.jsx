import React from "react";
import { CheckCircle } from "lucide-react";

export default function Notifications() {
  return (
    <div>
      <h1 className="text-3xl font-medium">Notifications</h1>
      <div className="flex gap-5 border-2 border-gray-300 p-6 shadow-custom rounded-lg items-center m-10">
        <div>
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium ">Quality Check Scheduled</p>
          <p className="text-gray-900">
            Car123 scheduled for quality check on 21st December 2024 .more
            details
          </p>
        </div>
      </div>
      <div className="flex gap-5 border-2 border-gray-300 p-6 shadow-custom rounded-lg items-center m-10">
        <div>
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium ">Email Verified! </p>
          <p className="text-gray-900">
            Your registered email has been verified.
          </p>
        </div>
      </div>
    </div>
  );
}
