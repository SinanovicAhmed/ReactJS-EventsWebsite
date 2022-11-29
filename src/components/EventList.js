import React from "react";

const EventList = (props) => {
  return (
    <div className="w-[100%] max-w-[1700px] px-[20px] p-[5px] my-[15px] flex justify-between gap-5 bg-white">
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.name}
      </h2>
      <h2 className="w-[30%] truncate border-r-[1px] border-gray">
        {props.description}
      </h2>
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.category}
      </h2>
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.location}
      </h2>
      <h2 className="w-[10%] truncate border-r-[1px] border-gray">
        {props.date}
      </h2>
      {props.header ? (
        <button className="w-[100px] rounded-full bg-[#0B2354] text-white">
          Uredi
        </button>
      ) : (
        <div className="w-[100px] opacity-0"></div>
      )}
    </div>
  );
};

export default EventList;
