import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import About from '../components/About';
import Qualification from '../components/Qualification';
import WorkTimeline from '../components/WorkTimeline';
import SkillProgress from '../components/SkillProgress';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeContent />
      <About/>
      <Qualification/>
      <WorkTimeline/>
      <SkillProgress/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default HomePage;
