import React from "react";
import MainApp from "./MainApp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./LoginSignUp/LoginPage";
import SellerMain from "./SellerMain";
// import SellCarThree from "./SellCarOnline/SellCarThree"; 
// import Logins from "./MechanicPart/Header/LoginPage";
// import CarDetails from "./CarDetails/Details";
// import CarCarousel from "./CarDetails/CarCarousel";
import AssignTable from "./Admin/AssignTable";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Buyer" element={<MainApp />} />
        <Route path="/Seller" element={<SellerMain />} />
        {/* <Route path="/SellCarThree" element={<SellCarThree />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
