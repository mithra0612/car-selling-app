import React from "react";
// import Carcard from "../Carcard/carcard";
import Tick from "./images/tick.svg"
export default function SellerNotifications() {
  return (
    <div className="w-[1100px] h-[620px] sticky left-96 mt-12 border-2 border-gray-300 p-10 shadow-md flex flex-col rounded-lg gap-10">
      <h1 className="text-3xl font-medium">Notifications</h1>
      <div className="flex gap-5 border-2 border-gray-300 p-6 shadow-custom rounded-lg items-center">
        <div>
          <img src={Tick} alt="Tick" className="w-20 h-20" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium ">Appointment Confirmed!</p>
          <p className="text-gray-900">
            Your car visit request has been confirmed by the seller 123. more
            details
          </p>
        </div>
      </div>
      <div className="flex gap-5 border-2 border-gray-300 p-6 shadow-custom rounded-lg items-center">
        <div>
          <img src={Tick} alt="Tick" className="w-20 h-20" />
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
