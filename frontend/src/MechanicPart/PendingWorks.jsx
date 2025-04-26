import React from "react";
import Profile from "../Mechanic/image/profileImage.png";

export default function PendingWorks({ setActiveComponent }) {
  const user = {
    name: "John Doe",
    email: "Johndoe@Gmail.Com",
    phone: "Xxxxxxx",
    time: "2:00pm",
    location: "271/14 Annai Nagar, Erode - 638011",
    seller: {
      name: "Seller 123",
      email: "Johndoe@Gmail.Com",
      phone: "Xxxxxxx",
    },
    date: "30/08/2018",
  };

  return (
    <div>
      {/* Back Button */}
      <button
    className="absolute top-4 right-4 bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg"
    onClick={() => setActiveComponent("pending")}
  >

        Back
      </button>

      <h1 className="text-3xl font-medium pb-4">Pending Works</h1>

      {/* Single Card for Buyer and Seller Details */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mx-10 ">
        <div className="flex flex-row gap-6">
          {/* Buyer Details */}
          <div className="flex-1">
            <div className="flex items-center gap-4 p-4">
              <img src={Profile} alt="User Avatar" className="w-14 h-14 rounded-full" />
              <div>
                <h5 className="font-bold text-xl text-gray-900">{user.name}</h5>
                <h5 className="pt-4 font-semibold text-lg ">Details</h5>
                <h5 className="font-normal mt-2 text-gray-900">Name: {user.name}</h5>
                <h5 className="font-normal mt-2 text-gray-900">Email: {user.email}</h5>
                <div className="mt-2">
                  <h5 className="font-normal text-gray-900">Phone: {user.phone}</h5>
                </div>
              </div>
            </div>
            <div className="p-4 mt-4">
              <p className="font-normal text-gray-900">Time: {user.time}</p>
              <p className="font-normal text-gray-900 mt-2">Location:</p>
              <p className="font-normal text-gray-900">{user.location}</p>
            </div>
          </div>

          {/* Seller Details */}
          <div className="flex-1">
            <div className="flex items-center gap-4 p-4">
              <img src={Profile} alt="Seller Avatar" className="w-14 h-14 rounded-full" />
              <div>
                <h5 className="font-bold text-xl text-gray-900">{user.seller.name}</h5>
                <h5 className="pt-4 font-semibold text-lg">Details</h5>
                <h5 className="font-normal mt-2 text-gray-900">Name: {user.seller.name}</h5>
                <h5 className="font-normal mt-2 text-gray-900">Email: {user.seller.email}</h5>
                <h5 className="font-normal mt-2 text-gray-900">Phone: {user.seller.phone}</h5>
              </div>
            </div>
            <div className="p-4 mt-4">
              <p className="font-normal text-gray-900">Date: {user.date}</p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="p-4 mt-4 text-center">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded-lg w-80"
            onClick={() => setActiveComponent("fillInspectionDataForm")}
          >
            Fill inspection data
          </button>
        </div>
      </div>
    </div>
  );
}
