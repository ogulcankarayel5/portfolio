import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import About from '../components/About';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeContent />
      <About/>
    </>
  );
};

export default HomePage;
