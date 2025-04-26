import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function SellCarTwo({ onCarData }) {
  const [RegistrationYear, setRegistrationYear] = useState("");
  const [YearOfManufacture, setYearOfManufacture] = useState("");
  const [Ownership, setOwnership] = useState("");
  const [KilometersDriven, setKilometersDriven] = useState("");
  const [FuelType, setFuelType] = useState("");
  const [Transmission, setTransmission] = useState("");
  const [Engine, setEngine] = useState("");
  const [RtoLocation, setRtoLocation] = useState("");
  const [Seats, setSeats] = useState("");

  const handleSubmit = () => {
    const data = {
      RegistrationYear,
      YearOfManufacture,
      Ownership,
      KilometersDriven,
      FuelType,
      Transmission,
      Engine,
      RtoLocation,
      Seats,
    };
    onCarData(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-orange-400">Sell</span> Car Online
        </h1>
        <div className="w-full max-w-3xl mt-6 shadow-lg bg-white rounded-lg">
          <div className="rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium p-6">
              Please Enter Your Car Details
            </h2>
            <form className="space-y-4 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <label
                    htmlFor="registration-year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Registration Year
                  </label>
                  <div className="relative">
                    <input
                      id="registration-year"
                      type="date"
                      className="mt-1 block text-gray-400 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                      placeholder="dd-mm-yyyy"
                      onChange={(e) => setRegistrationYear(e.target.value)}
                    />
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="year-of-manufacture"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year of Manufacture
                  </label>
                  <div className="relative">
                    <input
                      id="year-of-manufacture"
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm text-gray-400 pr-8"
                      placeholder="dd-mm-yyyy"
                      onChange={(e) => setYearOfManufacture(e.target.value)}
                    />
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="ownership"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ownership
                  </label>
                  <div className="relative">
                    <select
                      id="ownership"
                      className="mt-1 block w-full rounded-md text-gray-500 border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                      onChange={(e) => setOwnership(e.target.value)}
                    >
                      <option className="text-gray-500">Select One</option>
                      <option className="text-gray-500">First Owner</option>
                      <option className="text-gray-500">Second Owner</option>
                      <option className="text-gray-500">Third Owner</option>
                      <option className="text-gray-500">Fourth Owner</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="rto-location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    RTO Location
                  </label>
                  <div className="relative">
                    <select
                      id="rto-location"
                      className="mt-1 text-gray-500 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                      onChange={(e) => setRtoLocation(e.target.value)}
                    >
                      <option>--Select RTO Location--</option>
                      <option>Chennai</option>
                      <option>Coimbatore</option>
                      <option>Madurai</option>
                      <option>Trichy</option>
                      <option>Salem</option>
                      <option>Tirunelveli</option>
                      <option>Erode</option>
                      <option>Vellore</option>
                      <option>Thoothukudi</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="kms-driven"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kms Driven
                  </label>
                  <div className="relative">
                    <select
                      id="kms-driven"
                      className="mt-1 block text-gray-500 w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                      onChange={(e) => setKilometersDriven(e.target.value)}
                    >
                      <option>--Select Range--</option>
                      <option>0-10,000</option>
                      <option>10,001-20,000</option>
                      <option>20,001-30,000</option>
                      <option>30,001-40,000</option>
                      <option>40,001-50,000</option>
                      <option>50,001-60,000</option>
                      <option>60,001-70,000</option>
                      <option>70,001-80,000</option>
                      <option>80,001-90,000</option>
                      <option>90,001-100,000</option>
                      <option>100,001+</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="engine-displacement"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Engine Displacement
                  </label>
                  <div className="relative">
                    <select
                      id="engine-displacement"
                      className="mt-1 block text-gray-500 w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                      onChange={(e) => setEngine(e.target.value)}
                    >
                      <option>--Select Displacement--</option>
                      <option>1000 cc</option>
                      <option>1200 cc</option>
                      <option>1500 cc</option>
                      <option>1800 cc</option>
                      <option>2000 cc</option>
                      <option>2500 cc</option>
                      <option>3000 cc</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="no-of-seats"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No. of Seats
                  </label>
                  <input
                    id="no-of-seats"
                    type="number"
                    placeholder="0"
                    min="0"
                    onChange={(e) => setSeats(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fuel-type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fuel Type
                  </label>
                  <div className="relative">
                    <select
                      id="fuel-type"
                      onChange={(e) => setFuelType(e.target.value)}
                      className="mt-1 text-gray-500 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option className="text-gray-500">--Select Type--</option>
                      <option className="text-gray-500">Petrol</option>
                      <option className="text-gray-500">Diesel</option>
                      <option className="text-gray-500">Electric</option>
                      <option className="text-gray-500">Hybrid</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="transmission"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Transmission
                  </label>
                  <div className="relative">
                    <select
                      id="transmission"
                      onChange={(e) => setTransmission(e.target.value)}
                      className="mt-1 text-gray-500 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option>--Select One--</option>
                      <option>Manual</option>
                      <option>Automatic</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-orange-400 focus:ring-1 focus:ring-orange-400 px-3 py-2 text-lg font-semibold rounded-md h-10 w-50 items-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
