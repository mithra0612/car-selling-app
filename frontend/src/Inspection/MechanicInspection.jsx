import React from "react";
import UserAvatar from "../Profilecard/images/UserAvatar.svg";
import car from "../Profilecard/images/car.svg";
import Pending from "../Inspection/image/pending.svg";
import { FaCar, FaTools } from "react-icons/fa";

export default function MechanicInspection({ onSee }) {
  
  return (
    <>
      <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[740px] h-[220px]">
        <div className="flex flex-col">
          <div className="flex gap-x-96 items-center">
            <div className="flex gap-5 items-center">
              <img src={UserAvatar} alt="User Avatar" className="w-16 h-16" />
              <p className="font-semibold text-lg">Mechanic Name</p>
            </div>
            <button
              onClick={onSee}
              className="border-2 h-9 w-20 border-[#FF9E0C] rounded-xl bg-[#FF9E0C] text-white font-medium"
            >
              View
            </button>
          </div>
          <div className="flex gap-32 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 ml-3 items-center">
                <FaCar className="w-5 h-5 text-gray-700" />
                <p>
                  <span className="font-semibold">Car: </span>Ferrari
                </p>
                <FaTools className="w-5 h-5 text-gray-700" />
                <p>
                  <span className="font-semibold">Model: </span>Purosangue
                </p>
              </div>
              <div className="flex gap-4 ml-3 items-center">
                <p>Inspection Status</p>
                <img src={Pending} width={20} />
              </div>
            </div>
            <div>
              <img src={car} width={190} height={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
