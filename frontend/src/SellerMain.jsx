import React, { useState } from "react";
import SellerHeader from "./SellCarOnline/SellerHeader";
import SellerProfile from "./SellCarOnline/Seller/SellerProfile";
import SellerListing from "./SellCarOnline/Seller/MyListings";
import SellerNotify from "./SellCarOnline/Seller/SellerNotifications";
import SellerAppointment from "./SellCarOnline/Seller/SellerAppointment";
import SellCar from "./SellCarOnline/SellCarOne";
import SellCarTwo from "./SellCarOnline/SellCarTwo";
import SellCarThree from "./SellCarOnline/SellCarThree";
import CollectInfo from "./SellCarOnline/CollectInfo";

export default function SellerMain() {
  const [currentView, setCurrentView] = useState("Listing");
  const [Sellcar, SetSellcar] = useState(false);
  const [SellcarTwo, SetSellcarTwo] = useState(false);
  const [SellcarThree, SetSellcarThree] = useState(false);
  const [carData, setCarData] = useState({});
  const [ShowData, SetShowData] = useState(false);
  const [Showseller, SetShowSeller] = useState(false);

  function ShowSeller() {
    SetShowSeller(true); 
    SetShowData(false);
    SetSellcar(false);
    SetSellcarTwo(false);
    SetSellcarThree(false);
  }
  function ShowCarData(data) {
    setCarData(data);
    SetShowData(true);
    SetSellcar(false);
    SetSellcarTwo(false);
    SetSellcarThree(false);
    SetShowSeller(false);
  }

  function handleSellcar() {
    SetSellcar(true);
    SetSellcarTwo(false);
    SetSellcarThree(false);
    SetShowData(false);
    SetShowSeller(false);
  }

  function handleSellcarTwo(data) {
    SetSellcar(false);
    SetSellcarTwo(true);
    SetSellcarThree(false);
    setCarData(data);
    SetShowData(false);
    SetShowSeller(false);
  }

  function handleSellcarThree(data) {
    SetSellcar(false);
    SetSellcarTwo(false);
    SetSellcarThree(true);
    setCarData(data);
    SetShowData(false);
    SetShowSeller(false);
  }

  function returnToSellCar() {
    SetSellcar(true);
    SetSellcarTwo(false);
    SetSellcarThree(false);
    SetShowData(false);
    SetShowSeller(false);
  }

  const renderContent = () => {
    switch (currentView) {
      case "Listing":
        return <SellerListing />;
      case "Notify":
        return <SellerNotify />;
      case "Appoint":
        return <SellerAppointment />;
      default:
        return <div>Please select an option</div>;
    }
  };

  return (
    <div>
      <SellerHeader toggleSellcar={handleSellcar} onMakeChange = {ShowSeller}/>
      {Sellcar && <SellCar onchanging={handleSellcarTwo} />}
      {SellcarTwo && (
        <SellCarTwo onCarData={ShowCarData} />
      )}
      {SellcarThree && <SellCarThree onReturnToSellCar={returnToSellCar} />}
      {ShowData && <CollectInfo data={carData} onSubmit={handleSellcarThree} />}
      {!Sellcar && !SellcarTwo && !SellcarThree && !ShowData &&(
        <div className="flex gap-8">
          <SellerProfile
            togglelist={() => setCurrentView("Listing")}
            toggleNotify={() => setCurrentView("Notify")}
            toggleAppoint={() => setCurrentView("Appoint")}
          />
          {renderContent()}
        </div>
      )}
    </div>
  );
}
