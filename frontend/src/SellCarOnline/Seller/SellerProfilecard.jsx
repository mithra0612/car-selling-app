import React from "react";
import car from "./images/car.svg";
import { FaUser, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function SellerProfileCard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-x-80 items-center">
        <div className="flex gap-3 items-center">
          <FaUser className="w-10 h-6 text-gray-700" />
          <p>UserName</p>
        </div>
        <div className="flex items-center gap-2">
          <p>
            <span className="font-medium text-[#FF9E0C]">Scheduled By: </span>
            <span className="font-medium">Buyer123</span>
          </p>
        </div>
      </div>
      <div className="flex gap-28 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center ml-2">
              <FaCalendarAlt className="w-5 h-5 text-gray-700" />
              <p>Date: dd-mm-yy</p>
            </div>
            <div className="flex gap-2 items-center ">
              <FaClock className="w-5 h-5 text-gray-700" />
              <p>Time: 2:00 pm</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ml-2">
            <FaMapMarkerAlt className="w-5 h-5 text-gray-700" />
            <p>City, Location</p>
          </div>
        </div>
        <div>
          <img src={car} width={190} height={20} alt="Car" />
        </div>
      </div>
    </div>
  );
}
