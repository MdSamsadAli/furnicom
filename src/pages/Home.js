import React from "react";
import Sliders from "../components/Slider";
import Category from "../components/Category";
import Arrival from "../components/Arrival";
import Popular from "../components/Popular";
import BestSeller from "../components/BestSeller";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Sliders />
        <Category />
        <Arrival />
        <Popular />
        <BestSeller />
        <Banner />
        <Brand />
      </div>
      <ContactUs />
    </>
  );
}
