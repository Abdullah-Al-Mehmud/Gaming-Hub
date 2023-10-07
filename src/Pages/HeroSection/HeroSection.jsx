import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="bg-[url('../../../public/images/combatBG.jpg')] h-screen bg-cover bg-no-repeat bg-top">
      <div className="bg-black bg-opacity-80 h-screen">
        <Navbar></Navbar>
        <div className="text-center mt-24 pb-10">
          <div className="text-6xl font-bold text-white">
            <h1>Welcome to</h1>
            <h2 className="text-[#ff007f] font-extrabold mt-3">Gaming World</h2>
            <p className="text-lg font-bold text-white lg:px-80 md:px-16 px-5 mt-10">
              mmerse Yourself in the Ultimate Gaming Experience! Discover the
              latest games, meet your favorite gaming icons, compete in
              thrilling tournaments, and <br /> explore a world of excitement.
              Join us for an unforgettable <br /> journey into the heart of
              gaming culture.
            </p>
          </div>
          <button className="bg-[#ff007f] mt-8 rounded-lg font-bold px-6 py-2 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
