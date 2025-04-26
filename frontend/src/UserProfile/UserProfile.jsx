import React from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaBell,
  FaCalendarAlt,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import Arrow from "../UserProfile/images/arrow.svg";
import Avatar from "./images/Avatar.svg";

export default function UserProfile({onFavourites, onNotify, onAppoint, onList}) {
  return (
    <div className="mt-12 sticky left-10 w-72 h-[600px] rounded-lg border-2 border-gray-300 p-4 shadow-md flex flex-col items-center">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-center">
          <img src={Avatar} className="h-28" alt="User Avatar" />
        </div>
        <div className="flex flex-col gap-7 ml-5 mt-4">
          <div className="flex items-center gap-3 text-lg">
            <FaUser className="text-orange-500 text-xl" />
            <p className="text-lg">User Name</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaPhone className="text-orange-500 text-xl" />
            <p className="text-lg">987654321</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-orange-500 text-xl" />
            <p className="text-lg">user@gmail.com</p>
          </div>
        </div>
        <hr className="border-gray-300 my-3 w-full" />
        <div className="flex flex-col gap-4">
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-between mt-3 px-4" onClick={onFavourites}>
            <div className="flex items-center gap-1">
              <FaHeart className="text-orange-500 text-xl mr-2" />
              <p className="text-lg">My Favourites</p>
            </div>
            <img src={Arrow} className="h-4" alt="Arrow" />
          </div>
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-between mt-3 px-4" onClick={onNotify}>
            <div className="flex items-center gap-1">
              <FaBell className="text-orange-500 text-xl mr-2" />
              <p className="text-lg">Notifications</p>
            </div>
            <img src={Arrow} className="h-4" alt="Arrow" />
          </div>
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-between mt-3 px-4" onClick={onAppoint}>
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-orange-500 text-xl mr-2" />
              <p className="text-lg">Appointments</p>
            </div>
            <img src={Arrow} className="h-4" alt="Arrow" />
          </div>
          {/* <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-between mt-3 px-4" onClick={onList}>
            <div className="flex items-center gap-1">
              <FaList className="text-orange-500 text-xl mr-2" />
              <p className="text-lg">My Listings</p>
            </div>
            <img src={Arrow} className="h-4" alt="Arrow" />
          </div> */}
          {/* <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-between mt-3 px-4">
            <div className="flex items-center gap-1">
              <FaSignOutAlt className="text-orange-500 text-xl mr-2" />
              <p className="text-lg">Logout</p>
            </div>
            <img src={Arrow} className="h-4" alt="Arrow" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
