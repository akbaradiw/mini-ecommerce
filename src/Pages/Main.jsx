import React from "react";
import Navbar from "../Component/Navbar";
import Superiority from "../Component/Superiority";
import BestSeller from "../Component/BestSeller";
import NewArrival from "../Component/NewArrival";
import People from "../Component/People";
import Footer from "../Component/Footer";
import ProfilComp from "../Component/ProfilComp";
const Main = () => {
  return (
    <div>
      <Navbar />
      <ProfilComp/>
      <Superiority />
      <BestSeller />
      <NewArrival />
      <People />
      <Footer />
    </div>
  );
};

export default Main;
