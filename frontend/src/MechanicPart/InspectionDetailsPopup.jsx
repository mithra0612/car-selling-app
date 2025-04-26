import React from "react";
import usestate from "react";
import { X } from "lucide-react";
import Profile from "../Mechanic/image/profileImage.png";

const user = {
  name: "John Doe",
  email: "Johndoe@Gmail.Com",
  phone: "Xxxxxxx",
};

const seller = {
  name: "Seller123",
  email: "Johndoe@gmail.com",
  phone: "Xxxxxxx",
  date: "Yet To Be Decided By Seller",
  time: "Yet To Be Decided By Seller",
  location: "Yet To Be Decided By Seller",
};

const InspectionDetailsPopup = ({closeModal}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg min-w-[700px] max-h-[450px] p-6">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="grid grid-cols-2 gap-8">
          {/* User Details Card */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src={Profile}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-lg font-semibold">User Details</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black">
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p className="text-black">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-black">
                <span className="font-semibold">Phone No.:</span> {user.phone}
              </p>
            </div>
            <div className="pt-2">
              <p className="text-black pt-2">
                <span className="font-semibold">Date:</span> {seller.date}
              </p>
              <p className="text-black pt-2">
                <span className="font-semibold">Time:</span> {seller.time}
              </p>
            </div>
          </div>

          {/* Seller Details Card */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src={Profile}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-lg font-semibold">Seller Details</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black">
                <span className="font-semibold">Name:</span> {seller.name}
              </p>
              <p className="text-black">
                <span className="font-semibold">Email:</span> {seller.email}
              </p>
              <p className="text-black">
                <span className="font-semibold">Phone No.:</span> {seller.phone}
              </p>
              <div className="pt-2">
                <p className="text-black">
                  <span className="font-semibold">Location:</span> {seller.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionDetailsPopup;
