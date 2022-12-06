import React from "react";
import { useState } from "react";
import EventModal from "./EventModal";
const EventList = (props) => {
  const [showModal, setShowModal] = useState(false);

  const turnOffModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-[100%] px-[20px] p-[5px] my-[15px] flex justify-between gap-5 bg-white">
      {showModal && (
        <EventModal
          toggleModal={turnOffModal}
          rerender={props.rerender}
          method="PUT"
          id={props.id}
          name={props.name}
          description={props.description}
          category={props.category}
          location={props.location}
          date={props.date}
          image={props.image}
        />
      )}
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.name}
      </h2>
      <h2 className="w-[30%] text-clip overflow-hidden border-r-[1px] border-gray">
        {props.description}
      </h2>
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.category.name ? props.category.name : "Kategorija"}
      </h2>
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.location.name ? props.location.name : "Lokacija"}
      </h2>
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.date}
      </h2>
      {props.header ? (
        <button
          className="w-[100px] h-[30px]  rounded-full bg-[#0B2354] text-white my-auto"
          onClick={() => setShowModal(!showModal)}
        >
          Uredi
        </button>
      ) : (
        <div className="w-[100px] h-[25px] opacity-0"></div>
      )}
    </div>
  );
};

export default EventList;
