import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";

const ServiceReadMore = () => {
  const events = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const eventDetails = events.find((detail) => detail.id === idInt);
  console.log(eventDetails);
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <ServiceDetails eventDetails={eventDetails}></ServiceDetails>
      </div>
    </div>
  );
};

export default ServiceReadMore;
