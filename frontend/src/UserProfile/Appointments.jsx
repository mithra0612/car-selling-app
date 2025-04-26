import React from "react";
import { useState } from "react";
import Carcard from "../Carcard/carcard";
import Tick from "../UserProfile/images/tick.svg";
import Profile from "../Profilecard/ProfileCard";
import Mechanics from "../Inspection/MechanicInspection";
import Report from "../Inspection/MechanicStatus";

export default function Appointment({onView}) {
  const [TogglePage, SetTogglePage] = useState(false);
  const [ToggleAppoint, SetToggleAppoint] = useState(true);

  function HandleToggle() {
    SetTogglePage(true);
    SetToggleAppoint(false);
  }

  function handletoggleappoint() {
    SetToggleAppoint(true);
    SetTogglePage(false);
  }

  return (
    <div className="w-[1100px] h-[650px] sticky left-96 mt-16 border-2 border-gray-300 p-10 shadow-md flex flex-col rounded-lg gap-10">
      <div className="flex border-2 w-[450px] rounded-xl cursor-pointer">
        <div
          className={`flex justify-center items-center h-10 w-56 rounded-xl font-medium ${
            ToggleAppoint ? "bg-[#F89620] text-white" : "bg-white text-black"
          }`}
          onClick={handletoggleappoint}
        >
          <p>Appointments</p>
        </div>
        <div
          className={`flex justify-center items-center h-10 w-56 rounded-xl font-medium ${
            TogglePage ? "bg-[#F89620] text-white" : "bg-white text-black"
          }`}
          onClick={HandleToggle}
        >
          <p>Mechanic Inspections</p>
        </div>
      </div>
      {ToggleAppoint && (
        <div className="flex flex-col gap-8">
          <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[700px] h-[220px]">
            <Profile />
          </div>
          <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[700px]  h-[220px]">
            <Profile />
          </div>
        </div>
      )}
      {TogglePage ? <Mechanics onSee = {onView} /> : null}
    </div>
  );
}
