import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import About from '../components/About';
import Qualification from '../components/Qualification';
import WorkTimeline from '../components/WorkTimeline';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeContent />
      <About/>
      <Qualification/>
      <WorkTimeline/>
    </>
  );
};

export default HomePage;
