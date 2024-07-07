import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Doctors from "./Doctors/Doctors";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Doctors />
    </div>
  );
}

export default Home;
