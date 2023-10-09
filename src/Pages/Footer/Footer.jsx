import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" className="bg-[#0b0114] py-16">
      <div>
        <div className="flex justify-center">
          <img className="w-14" src="/images/arcade.png" alt="" />
        </div>
        <p className="text-center font-bold px-5 mt-4 text-white">
          mmerse Yourself in the Ultimate Gaming Experience! Discover the latest
          games, <br /> meet your favorite gaming icons, compete in
        </p>
      </div>
      <div className="mt-4 ">
        <div className="flex gap-5 justify-center mt-4">
          <img
            className="w-8"
            src="../../../public/images/facebook.png"
            alt=""
          />
          <img
            className="w-8"
            src="../../../public/images/instagram.png"
            alt=""
          />
          <img
            className="w-8"
            src="../../../public/images/twitter.png"
            alt=""
          />
        </div>
      </div>
      <hr className="w-96 h-1 mx-auto mt-4 bg-[#ff007f] border-0 rounded md:my-10 "></hr>
      <p className="text-center font-bold text-white px-20 md:mt-0 mt-3">
        Copyright © 2023 - All right reserved by{" "}
        <span className="text-white">ACME Industries Ltd</span>
      </p>
    </div>
  );
};

export default Footer;
