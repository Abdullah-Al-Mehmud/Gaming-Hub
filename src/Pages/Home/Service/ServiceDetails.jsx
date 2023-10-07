import PropTypes from "prop-types";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ServiceDetails = ({ eventDetails }) => {
  const { category, events } = eventDetails;
  return (
    <div>
      <div className="mb-24">
        <Navbar></Navbar>
      </div>

      <div className="flex justify-center">
        <img
          className="md:w-[600px] md:h-[500px]"
          src={events[0].image}
          alt={`category`}
        />
      </div>
      <div className="my-20 lg:px-0 px-5 text-xl text-white font-semibold">
        <p>{events[0].description}</p>
        <p className="mt-4">{events[0].detail_description}</p>
        <div className="flex justify-center">
          <Link to="/">
            <button className=" px-6 py-2 flex text-lg  items-center gap-1 text-white rounded-lg bg-[#ff007f] mt-10">
              <AiOutlineArrowLeft></AiOutlineArrowLeft> Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceDetails.propTypes = {
  eventDetails: PropTypes.object.isRequired,
};

export default ServiceDetails;
