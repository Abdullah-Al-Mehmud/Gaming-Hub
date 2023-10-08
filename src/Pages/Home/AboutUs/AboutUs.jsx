const AboutUs = () => {
  return (
    <div>
      <h1 className="text-white font-bold text-5xl text-center pt-14 pb-20">
        About <span className="text-[#ff007f]">Us</span>
      </h1>
      <div className="md:flex  py-10 gap-10">
        {/* img */}
        <div>
          <img
            className="w-fit ml-20"
            src="../../../../public/images/section2.jpg"
            alt=""
          />
        </div>
        {/* text */}
        <div className="flex items-center ml-20 mr-10">
          <p className="text-white  font-semibold">
            Many online gaming events revolve around competitive tournaments
            where players or teams compete against each other in various video
            games. These tournaments often feature popular esports titles like
            League of Legends, Dota 2, Counter-Strike: Global Offensive, and
            more. Participants can win cash prizes, sponsorships, or recognition
            as the best players in their respective games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
