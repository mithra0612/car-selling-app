import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellCarThree({ onReturnToSellCar }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handlePublish = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onReturnToSellCar();
    }, 3000);
  };

  return (
    <div>
      <div className="py-12 px-6 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-semibold p-4 text-center">
          <span className="text-orange-400">Sell </span>Car Online
        </h1>
        <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md">
          <div className="flex flex-col mb-6">
            <label htmlFor="price" className="text-gray-700 font-medium mb-2">
              Enter your price:
            </label>
            <span className="text-gray-500 text-sm py-4">
              Recommended Price: 4.2L
            </span>

            <div className="flex items-center">
              <input
                id="price"
                type="text"
                className="border-gray-300 rounded-md w-full px-3 p-6 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                placeholder="₹ XXXX"
              />
            </div>
            <div className="flex justify-end items-center mt-4">
              <button
                type="button"
                onClick={handlePublish}
                className="bg-orange-400 w-fit text-white py-2 px-4 rounded-md hover:bg-orange-500"
              >
                Publish AD
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-orange-500">
              Congratulations!
            </h2>
            <p className="mt-4 text-gray-700">
              Your ad has been successfully published.
            </p>
            <p className="mt-2 text-gray-700">
              Thank you for choosing our platform to sell your car.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
