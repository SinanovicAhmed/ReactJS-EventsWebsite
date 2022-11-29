import React from "react";
import PostFormEvent from "./PostFormEvent";
const EventModal = (props) => {
  return (
    <div
      onClick={(event) => {
        props.toggleModal();
      }}
      className="flex justify-center items-center absolute w-[100%] h-[100%] right-0 backdrop-blur-[2px] bg-white/30 z-10"
    >
      <div className="z-20 flex flex-col items-center w-[100%] max-w-[800px] h-[100%] max-h-[400px] bg-white border-2 border-[#0B2354] rounded-lg">
        <h2 className="px-[15px] text-[22px] font-bold text-[#0B2354] border-b-[1px] border-[#3F61D9]">
          Dodavanje eventa
        </h2>
        <PostFormEvent />
      </div>
    </div>
  );
};

export default EventModal;
