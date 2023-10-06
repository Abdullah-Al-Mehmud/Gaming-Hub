import { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Service from "./Service/Service";

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
        <h1 className="text-white font-bold text-3xl text-center py-2">
          Our <span className="text-[#ff007f]">Services</span>
        </h1>
        <div className="grid md:grid-cols-3">
          {services.map((events) => (
            <Service key={events.id} events={events}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
