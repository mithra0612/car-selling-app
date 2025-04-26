import React, { useState } from "react";
import Headers from "./Header/Headers";
import UserProfile from "./UserProfile";
import Profile from "../Mechanic/image/profileImage.png";
import { MapPin } from "lucide-react"; // Replaced Location SVG with MapPin icon
import Car from "../Carcard/images/car.svg"; // Kept as is per requirements
import InspectionDetailsPopup from "./InspectionDetailsPopup";
import Pending from "./Pending";
import PendingWorks from "./PendingWorks";
import Notifications from "./Notifications";
import FillInspectionDataForm from "./FillInspectionDataForm";

export default function PendingWorksDisplay() {
  const [activeComponent, setActiveComponent] = useState("pending");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "pending":
        return <Pending setActiveComponent={setActiveComponent} />;
      case "pendingWorks":
        return <PendingWorks setActiveComponent={setActiveComponent} />;
      case "fillInspectionDataForm":
        return <FillInspectionDataForm setActiveComponent={setActiveComponent} />;
      case "notifications":
        return <Notifications />;
      default:
        return <Pending setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <div>
      <Headers setActiveComponent={setActiveComponent}/>
      <div className="flex flex-row">
        {/* Sidebar for user profile */}
        <UserProfile setActiveComponent={setActiveComponent} />

        {/* Main content area */}
        <div className="w-[1100px] sticky left-96 border-2 mt-8 min-h-[670px] max-h-fit border-gray-300 px-6 py-2 shadow-md flex flex-col rounded-lg gap-8">
          <div className="flex-grow p-6">{renderActiveComponent()}</div>
        </div>
      </div>
    </div>
  );
}
