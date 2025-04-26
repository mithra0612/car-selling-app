import React from "react";
import { useNavigate } from "react-router-dom";

export default function CollectInfo({ data, onSubmit }) {

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-orange-500">Collected Car Information</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Registration Year</p>
            <p className="text-lg font-semibold text-gray-900">{data.RegistrationYear}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Year of Manufacture</p>
            <p className="text-lg font-semibold text-gray-900">{data.YearOfManufacture}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Ownership</p>
            <p className="text-lg font-semibold text-gray-900">{data.Ownership}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Kilometers Driven</p>
            <p className="text-lg font-semibold text-gray-900">{data.KilometersDriven}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Fuel Type</p>
            <p className="text-lg font-semibold text-gray-900">{data.FuelType}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Transmission</p>
            <p className="text-lg font-semibold text-gray-900">{data.Transmission}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">Engine Displacement</p>
            <p className="text-lg font-semibold text-gray-900">{data.Engine}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">RTO Location</p>
            <p className="text-lg font-semibold text-gray-900">{data.RtoLocation}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">No. of Seats</p>
            <p className="text-lg font-semibold text-gray-900">{data.Seats}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            onClick={onSubmit}
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 px-6 py-3 text-lg font-semibold rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}