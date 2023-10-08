import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Faq = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up">
      <h1 className="text-white font-bold text-5xl text-center pt-14 ">
        <span className="text-[#ff007f]">FAQ</span>
      </h1>
      <div className="md:flex items-center py-10 gap-10">
        {/* text */}
        <div className="items-center ml-32  text-white">
          <div className="collapse lg:w-[500px] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is the purpose of this gaming website?
            </div>
            <div className="collapse-content">
              <p>
                This gaming website aims to provide gamers with a central hub
                for gaming news, reviews, guides, and a vibrant gaming
                community.
              </p>
            </div>
          </div>
          <div className="collapse lg:w-[500px] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I purchase tickets to gaming events through this website?
            </div>
            <div className="collapse-content">
              <p>
                Yes, for events that require tickets, you can often purchase
                them directly through our website. Visit the event page and
                click on the Buy Tickets or Register button for ticketing
                information.
              </p>
            </div>
          </div>
          <div className="collapse lg:w-[500px] collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I stay updated on event announcements and changes?
            </div>
            <div className="collapse-content">
              <p>
                You can stay informed about event announcements, changes, and
                updates by subscribing to our newsletter or following our social
                media channels. We also post important updates on the event
                pages.
              </p>
            </div>
          </div>
        </div>
        {/* img */}
        <div>
          <img
            className="lg:w-[1000px] "
            src="../../../../public/images/faq.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
