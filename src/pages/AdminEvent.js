import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Events from "../components/eventdummy";
import EventList from "../components/EventList";
import plusIcon from "../Images/plusIcon.png";
import { useState } from "react";
import EventModal from "../components/EventModal";
const AdminEvent = () => {
  const [showModal, setShowModal] = useState(false);

  const turnOffModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex-1 h-screen flex flex-col relative">
      {showModal && <EventModal toggleModal={turnOffModal} />}
      <h2 className="text-[30px] text-[#0B2354] font-bold text-center">
        Eventi
      </h2>
      <div className="w-[100%] h-full bg-[#EFEEEE] rounded-lg relative">
        <div
          onClick={() => setShowModal(true)}
          className="w-[50px] h-[50px] absolute bottom-5 right-5 bg-[#0B2354] rounded-full flex justify-center items-center cursor-pointer hover:scale-105"
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
        {Events.map((event) => (
          <EventList
            key={event.id}
            name={event.name}
            category={event.category.name}
            location={event.location.name}
            description={event.description}
            date={event.date}
            header={true}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminEvent;
