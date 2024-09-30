import React from "react";
import BannerLeft from "../Component/BannerLeft";
import BannerRight from "../Component/BannerRight";
import Navbar from "../Component/Navbar";
import Superiority from "../Component/Superiority";
import BestSeller from "../Component/BestSeller";
import NewArrival from "../Component/NewArrival";
import People from "../Component/People";
import Footer from "../Component/Footer";
import Discount from "../Component/Discount";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 pt-20">
        <BannerLeft />
        <BannerRight />
      </div>
      {/* <ProfilComp/> */}
      <Superiority />
      <BestSeller />

      <Discount />
      <NewArrival />
      <People />

      <Footer />
    </div>
  );
};

export default Main;
