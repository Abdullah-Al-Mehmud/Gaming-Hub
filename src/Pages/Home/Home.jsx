import { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Service from "./Service/Service";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./events.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="">
      <HeroSection></HeroSection>

      <div>
        <h1 className="text-white font-bold text-5xl text-center pt-16">
          Our <span className="text-[#ff007f]">Services</span>
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 px-14 py-20 gap-5">
          {services.map((events) => (
            <Service key={events.id} eventsItems={events}></Service>
          ))}
        </div>
      </div>

      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
