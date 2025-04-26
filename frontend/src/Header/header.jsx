import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { Bell, UserCircle } from "lucide-react";

export default function Header({ onUser, onBell, onHome }) {
  const [drop, setDrop] = useState(false);
  const [change, setChange] = useState("");
  const navigate = useNavigate();

  function changetoggle() {
    if (change === "Seller") {
      navigate("/Seller");
    }
  }

  function toggleDropdown() {
    setDrop(!drop);
  }

  function showDropdown() {
    setDrop(true);
  }

  function hideDropdown() {
    setDrop(false);
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 h-16 flex items-center px-6 shadow-lg">
      {/* Navigation Links */}
      <div className="flex items-center gap-12 text-white">
        <p className="font-extrabold text-3xl tracking-wide">CarMarket</p>
        <p
          className="cursor-pointer hover:underline hover:text-yellow-200 transition-all duration-200"
          onClick={onHome}
        >
          Search Cars
        </p>
        <select
          className="cursor-pointer text-gray-800 bg-white border border-orange-500 rounded-lg px-3 py-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
          onChange={(e) => setChange(e.target.value)}
          onClick={changetoggle}
        >
          <option>Buyer</option>
          <option>Seller</option>
        </select>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Notification and Avatar */}
      <div className="flex items-center gap-8 relative mr-6">
        {/* Bell Icon */}
        <Bell 
          className="w-8 h-8 hover:scale-110 transition-transform duration-200 cursor-pointer drop-shadow-md text-white"
          onClick={onBell}
        />

        {/* Avatar Dropdown */}
        <div
          className="relative"
          onMouseEnter={showDropdown}
          onClick={hideDropdown}
        >
          <UserCircle
            className="w-8 h-8 hover:scale-110 transition-transform duration-200 cursor-pointer drop-shadow-md text-white"
          />

          {drop && (
            <div className="absolute top-full right-0 mt-4 w-56 bg-white shadow-xl rounded-lg p-4 flex flex-col gap-4 z-50">
              <div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={() => {
                  onUser();
                  hideDropdown();
                }}
              >
                <FaHeart className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">My Favourites</p>
              </div>
              <div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={hideDropdown}
              >
                <Bell className="text-orange-500 text-xl" />
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
                onClick={() => {
                  navigate("/");
                  hideDropdown();
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
