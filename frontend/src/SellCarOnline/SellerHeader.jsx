import React, { useState } from "react";
import Bellicon from "./image/bellicon.svg";
import Avatar from "../Header/image/avatar.svg";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBell, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";

export default function SellerHeader({ toggleSellcar, onMakeChange }) {
  const [drop, setDrop] = useState(false);

  function toggleDropdown() {
    setDrop(!drop);
  }

  function showDropdown() {
    setDrop(true);
  }

  function hideDropdown() {
    setDrop(false);
  }

  const navigate = useNavigate();
  const [value, Setvalue] = useState("");

  function handleChange() {
    if (value === "Buyer") {
      navigate("/Buyer");
    }
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 h-16 flex items-center px-6 shadow-lg">
      <div className="flex items-center gap-12 text-white">
        <p className="font-extrabold text-3xl tracking-wide">CarMarket</p>
        <p
          className="cursor-pointer hover:underline hover:text-yellow-200 transition-all duration-200"
          onClick={toggleSellcar}
        >
          Sell Car
        </p>
        <select
          className="cursor-pointer text-gray-800 bg-white border border-orange-500 rounded-lg px-3 py-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
          onChange={(e) => Setvalue(e.target.value)}
          onClick={handleChange}
        >
          <option>Seller</option>
          <option>Buyer</option>
        </select>
      </div>

      <div className="flex-grow"></div>

      <div className="flex items-center gap-8 relative mr-6">
        <img
          src={Bellicon}
          className="w-8 h-8 hover:scale-110 transition-transform duration-200 cursor-pointer drop-shadow-md"
          alt="Bell Icon"
        />

        <div className="relative" onMouseEnter={showDropdown}>
          <img
            src={Avatar}
            className="w-9 h-9 hover:scale-110 transition-transform duration-200 cursor-pointer rounded-full border-2 border-white shadow-lg"
            alt="Avatar Icon"
            onClick={toggleDropdown}
          />
          {drop && (
            <div className="absolute top-full right-0 mt-4 w-56 bg-white shadow-xl rounded-lg p-4 flex flex-col gap-4 z-50">
              <div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={() => {
                  hideDropdown();
                  onMakeChange();
                }}
              >
                <FaBell className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">Notifications</p>
              </div>
              <div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={hideDropdown}
              >
                <FaCalendarAlt className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">Appointments</p>
              </div>
              <div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={hideDropdown}
              >
                <FaCalendarAlt className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">My Listings</p>
              </div>
              <div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={() => {
                  hideDropdown();
                  navigate("/");
                }}
              >
                <FaSignOutAlt className="text-orange-500 text-xl" />
                <p className="text-red-600 font-medium">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
