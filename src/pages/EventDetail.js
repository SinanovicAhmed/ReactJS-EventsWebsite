import Navbar from "../components/home/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "../components/home/Comments";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();

  const getEventDetails = async () => {
    const response = await fetch("http://localhost:8080/api/events/" + id);
    const event = await response.json();
    setEvent(event);
  };

  useEffect(() => {
    getEventDetails();
  }, []);

  if (!event) return <p>Loading...</p>;
  return (
    <div className="w-[100%] flex flex-col  items-center">
      <Navbar />
      <div className="w-[60%] flex flex-col items-center border-x-2 border-[#0B2354] bg-[#EFEEEE]">
        <h2 className="w-[80%] text-center text-[25px] font-bold text-[#0B2354] border-b-2 border-[#0B2354] mb-[20px]">
          Event
        </h2>
        <img className="w-[80%] h-[300px] object-cover" src={event.image_url} />
        <div className="w-[95%] flex justify-between py-[10px]">
          <p className="text-[20px] font-bold">{event.name}</p>
          <p className="text-[20px] font-bold">{event.date}</p>
          <p className="text-[20px] font-bold">{event.category.name}</p>
        </div>
        <p className="text-[15px] text-center">{event.description}</p>

        <h2 className="w-[80%] text-center text-[25px] font-bold text-[#0B2354] mt-[10px] border-b-2 border-[#0B2354] mb-[20px]">
          Lokacija
        </h2>

        <img
          className="w-[80%] h-[300px] object-cover"
          src={event.location.image_url}
        />
        <p className="text-[20px] font-bold py-[10px]">{event.location.name}</p>
        <h2 className="w-[80%] text-center text-[25px] font-bold text-[#0B2354] mt-[10px] border-b-2 border-[#0B2354] mb-[20px]">
          Komentari
        </h2>
        <Comments comments={event.comments} event_id={id} />
      </div>
    </div>
  );
};

export default EventDetail;
