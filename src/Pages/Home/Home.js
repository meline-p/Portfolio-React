import React from "react";
import HomeCard from "../../Components/HomeCard/HomeCard";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import BarreResSo from "../../Components/BarreResSo/BarreResSo";

export default function Home() {
  return (
    <div>
      <BarreResSo />
      <div className="about">
        <div className="bg-color"></div>
        <HomeCard />
        <div className="home-scroll">
          <p>Scroll</p>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <div className="container-home-img">
        {/* <img className="home-img"
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          alt="bureau" /> */}
      </div>
      <Services />
      <Footer />
    </div>
  );
}
