import React from "react";
import Header from "../Header/header";
import UserProfile from "../UserProfile/UserProfile";
import Profile from "../Mechanic/image/profileImage.png";

export default function FillInspectionDataForm({setActiveComponent}) {
  return (
    <div>
      <button
    className="absolute top-4 right-4 bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg"
    onClick={() => setActiveComponent("pendingWorks")}
  >

        Back
      </button>
          <h1 className="text-3xl font-medium pb-6">Fill Inspection Data</h1>

          {/* Inspection Form */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mx-10">
            {/* User Profile Section */}
            <div className="flex items-center mb-6">
              <img
                src={Profile}
                alt="User Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-lg font-semibold">John Doe</h2>
            </div>

            {/* Inspection Categories */}
            <div className="space-y-6">
              {/* Exterior */}
              <div>
                <h3 className="font-bold">Exterior</h3>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    Is The Body Condition Satisfactory?{" "}
                    <input
                      type="checkbox"
                      className ="w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer transition-colors duration-300 
                      checked:bg-orange-400 checked:border-orange-400 
                      focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ml-2"
                                    />
                  </li>
                  <li>
                    Paint Quality:
                    <br></br>
                    <span>
                    How Would You Rate The Paint Condition, And Are There Any Areas Of Concern?
                    </span>

                    <input
                      type="text"
                      placeholder="Enter details"
                      className="w-full mt-1 border-t-0  border-l-0  border-r-0 border-b-2  p-2 focus:ring-0 focus:ring-white"
                    />
                  </li>
                </ul>
              </div>

              {/* Interior */}
              <div>
                <h3 className="font-bold">Interior</h3>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    Is The Seats Condition Acceptable, Or Is There Noticeable Wear (E.G., Tear On The Driver's Seat)?{" "}
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer transition-colors duration-300 
                      checked:bg-orange-400 checked:border-orange-400 
                      focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ml-2"                    />
                  </li>
                    <input
                      type="text"
                      placeholder="Enter detailed description"
                      className="w-full mt-1 border-t-0  border-l-0  border-r-0 border-b-2  p-2 focus:ring-0 focus:ring-white"
                    />
                </ul>
              </div>

              {/* Mechanical */}
              <div>
                <h3 className="font-bold">Mechanical</h3>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    Engine Condition:{" "}
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer transition-colors duration-300 
                      checked:bg-orange-400 checked:border-orange-400 
                      focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ml-2"
                    />
                  </li>
                  <li>
                  Is There Any Sign Of Oil Leakage Or Other Mechanical Issues?                    <input
                      type="text"
                      placeholder="Detailed Description"
                      className="w-full mt-1 border-t-0  border-l-0  border-r-0 border-b-2  p-2 focus:ring-0 focus:ring-white"
                    />
                  </li>
                </ul>
              </div>

              {/* Wheels And Tires */}
              <div>
                <h3 className="font-bold">Wheels And Tires</h3>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    Are The Tires In Good Condition, Or Is The Tread Worn Out
                    (Especially On The Front Tires)?{" "}
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer transition-colors duration-300 
                      checked:bg-orange-400 checked:border-orange-400 
                      focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ml-2"                    />
                  </li>
                    <input
                      type="text"
                      placeholder="Detailed Description"
                      className="w-full mt-1 border-t-0  border-l-0  border-r-0 border-b-2  p-2 focus:ring-0 focus:ring-white"
                    />
                  
                </ul>
              </div>

              {/* Electronics */}
              <div>
                <h3 className="font-bold">Electronics</h3>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    Dashboard Lights:{""}
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-400 rounded-md cursor-pointer transition-colors duration-300 
                      checked:bg-orange-400 checked:border-orange-400 
                      focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ml-2"                    />
                    <br></br>
                    <span >Are All Dashboard Warning Lights Functioning Properly?</span>                    
                   
                  </li>
                    <input
                      type="text"
                      placeholder="Detailed Description"
                      className="w-full mt-1 border-t-0  border-l-0  border-r-0 border-b-2  p-2 focus:ring-0 focus:ring-white"
                    />
                </ul>
              </div>
              <input type = "submit" className = "bg-orange-500 rounded-md p-2 text-white w-20"></input>
            </div>
      </div>
    </div>
  );
}
