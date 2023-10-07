import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ eventsItems }) => {
  const { id, category, events } = eventsItems;

  return (
    <div className="card text-center rounded-lg ">
      <figure>
        <img
          className="h-60 w-fit rounded-lg"
          src={events[0].image}
          alt="Shoes"
        />
      </figure>
      <div className="px-10 py-8 text-white">
        <h2 className="card-title text-xl justify-center">{category}</h2>
        <p className="mt-4">
          {events[0].description.length > 100
            ? events[0].description.slice(0, 100)
            : events[0].description}
          .....
        </p>
        <p className="mt-4 text-lg font-bold">Price : {events[0].price}</p>
        <div className="card-actions justify-center">
          <Link to={`/service/${id}`}>
            <button className=" px-6 py-2 flex  items-center gap-1 text-white rounded-lg bg-[#ff007f] mt-4">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  eventsItems: PropTypes.object.isRequired,
};

export default Service;
