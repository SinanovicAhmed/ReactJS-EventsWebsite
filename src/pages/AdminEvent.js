import React from "react";
import EventList from "../components/events/EventList";
import EventModal from "../components/events/EventModal";
import plusIcon from "../Images/plusIcon.png";
import { useState, useEffect } from "react";

const AdminEvent = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [renderAfterPost, setRenderAfterPost] = useState(true);

  const turnOffModal = () => {
    setShowModal(false);
  };

  const getEvents = async () => {
    const response = await fetch("http://localhost:8080/api/events");
    const event = await response.json();
    setEvents(event);
    console.log(event);
  };

  useEffect(() => {
    getEvents();
  }, [renderAfterPost]);

  const rerender = () => {
    setTimeout(() => {
      setRenderAfterPost(!renderAfterPost);
    }, 1000);
  };
  return (
    <div className="flex-1 h-screen flex flex-col relative">
      {showModal && (
        <EventModal
          toggleModal={turnOffModal}
          rerender={rerender}
          method="POST"
          name=""
          description=""
          category=""
          location=""
          date=""
          image=""
        />
      )}
      <h2 className="text-[30px] text-[#0B2354] font-bold text-center">
        Eventi
      </h2>
      <div className="max-w-[1500px] h-full bg-[#EFEEEE] rounded-lg relative">
        <div
          onClick={() => setShowModal(true)}
          className="w-[50px] h-[50px] fixed bottom-10 right-10 bg-[#0B2354] rounded-full flex justify-center items-center cursor-pointer hover:scale-105"
        >
          <img src={plusIcon} />
        </div>
        <EventList
          name="Naziv"
          category="Kategorija"
          location="Lokacija"
          description="Opis"
          date="Datum"
          header={false}
        ></EventList>
        {events &&
          events.map((event) => (
            <EventList
              key={event.id}
              id={event.id}
              name={event.name}
              category={event.category}
              location={event.location}
              description={event.description}
              date={event.date}
              image={event.image_url}
              header={true}
              rerender={rerender}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminEvent;
