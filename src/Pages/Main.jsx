import React from "react";
import Navbar from "../Component/Navbar";
import Profil from "../Component/Profil";
import Superiority from "../Component/Superiority";
import BestSeller from "../Component/BestSeller";
import NewArrival from "../Component/NewArrival";
import People from "../Component/People";
import Footer from "../Component/Footer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Profil />
      <Superiority />
      <BestSeller />
      <NewArrival />
      <People />
      <Footer />
    </div>
  );
};

export default Main;
