import React from "react";
import { Link } from "react-router-dom";
const SidebarElement = (props) => {
  return (
    <Link
      to={props.link}
      className="w-[98%] px-[20px] py-[2px] my-[15px] flex items-center cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full"
    >
      <img src={props.icon} alt="SidebarIcon" width="30px" height="30px" />
      <h2 className="text-white pl-[20px] text-[18px]">{props.text}</h2>
    </Link>
  );
};

export default SidebarElement;
