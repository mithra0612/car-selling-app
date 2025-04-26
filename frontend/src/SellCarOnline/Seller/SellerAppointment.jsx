import React from "react";
import { useState } from "react";
import SellerMechanic from "./SellerMechanics";
import SellerProfileCard from "./SellerProfilecard";

export default function SellerAppointment() {
  return (
    <div className="w-[1100px] h-[650px] sticky left-96 mt-12 border-2 border-gray-300 p-10 shadow-md flex flex-col rounded-lg gap-10">
      <h1 className="text-3xl font-medium">Appointments</h1>
      <div className="flex flex-col gap-8">
        <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[700px] h-[220px]">
          <SellerProfileCard />
        </div>
        <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[700px]  h-[220px]">
          <SellerProfileCard />
        </div>
      </div>
    </div>
  );
}
