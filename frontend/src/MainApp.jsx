import React, { useState } from "react";

import SignUp from "./LoginSignUp/SignUp";
import SellCarOne from "./SellCarOnline/SellCarOne";
import SellCarTwo from "./SellCarOnline/SellCarTwo";
import SellCarThree from "./SellCarOnline/SellCarThree";
import Header from "./Header/header";
import "./index.css";
import Notification from "./UserProfile/Notifications";
import UserProfile from "./UserProfile/UserProfile";
import MyFavourites from "./UserProfile/MyFavourites";
import Appointments from "./UserProfile/Appointments";
import Report from "./Inspection/MechanicStatus";
import HomePage from "./BuyerHomePage/HomePage";

export default function MainApp() {
  const [Log, SetLog] = useState(false);
  const [Notifications, SetNotifications] = useState(false);
  const [User, SetUser] = useState(false);
  const [Favorites, setFavorites] = useState(false);
  const [Appoint, SetAppoint] = useState(false);
  const [Listing, SetListing] = useState(false);
  const [Bell, SetBell] = useState(false);
  const [SearchCar, SetSearch] = useState(false);
  const [Select, SetSelect] = useState(false);
  const [CarPrice, SetCarPrice] = useState(false);
  const [Homepage, SetHomePage] = useState(true);

  function showHomePage() {
    SetHomePage(true);
    SetCarPrice(false);
    SetSelect(false);
    SetSearch(false);
    SetNotifications(false);
    SetListing(false);
    SetAppoint(false);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
  }

  function DisplayToggle() {
    SetStatusReport(false);
  }

  function carPrice() {
    SetHomePage(false);
    SetCarPrice(true);
    SetSearch(false);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSelect(false);
  }
  function Searchcar() {
    SetHomePage(false);
    SetCarPrice(false);
    SetSearch(true);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSelect(false);
  }
  function Loging() {
    SetHomePage(false);
    SetCarPrice(false);
    SetLog(true);
    SetUser(false);
    setFavorites(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Notify() {
    SetHomePage(false);
    SetCarPrice(false);
    SetNotifications(true);
    setFavorites(false);
    SetLog(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Userpage() {
    SetHomePage(false);
    SetCarPrice(false);
    SetUser(true);
    SetLog(false);
    setFavorites(true);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Favourite() {
    SetHomePage(false);
    SetCarPrice(false);
    setFavorites(true);
    SetLog(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Appointment() {
    SetHomePage(false);
    SetCarPrice(false);
    SetAppoint(true);
    SetNotifications(false);
    setFavorites(false);
    SetLog(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Listings() {
    SetHomePage(false);
    SetCarPrice(false);
    SetListing(true);
    SetNotifications(false);
    setFavorites(false);
    SetLog(false);
    SetAppoint(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Bellicon() {
    SetHomePage(false);
    SetCarPrice(false);
    SetNotifications(true);
    SetListing(false);
    SetAppoint(false);
    SetLog(false);
    setFavorites(false);
    SetSearch(false);
    SetSelect(false);
    SetUser(true);
  }
  function SelectCar() {
    SetHomePage(false);
    SetCarPrice(false);
    SetSelect(true);
    SetSearch(false);
    SetNotifications(false);
    SetListing(false);
    SetAppoint(false);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
  }

  const [StatusReport, SetStatusReport] = useState(false);
  function ViewStatus() {
    SetStatusReport(true);
  }

  return (
    <div>
      <Header
        onUser={Userpage}
        onLog={Loging}
        onBell={Bellicon}
        onSearch={Searchcar}
        onHome={showHomePage}
      />
      {Homepage ? <HomePage /> : null}
      {StatusReport ? <Report onDisplay={DisplayToggle} /> : null}
      <div className="flex ">
        {User ? (
          <UserProfile
            onFavourites={Favourite}
            onNotify={Notify}
            onAppoint={Appointment}
            onList={Listings}
          />
        ) : null}
        {Favorites ? <MyFavourites /> : null}
        {Notifications ? <Notification /> : null}
        {Appoint ? <Appointments onView={ViewStatus} onDisplay={DisplayToggle} /> : null}
      </div>
      {SearchCar ? <SellCarOne onSubmit={SelectCar} /> : null}
      {Select ? <SellCarTwo onsubmit={carPrice} /> : null}
      {CarPrice ? <SellCarThree /> : null}
    </div>
  );
}
