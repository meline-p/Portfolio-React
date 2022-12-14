import React from "react";
import HomeCard from "../../Components/HomeCard/HomeCard";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="about">
        <div className="bg-color"></div>
        <HomeCard />
      </div>
      <Services />
      <Footer />
    </div>
  );
}
