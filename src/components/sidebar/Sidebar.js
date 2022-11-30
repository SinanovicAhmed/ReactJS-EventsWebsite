import React from "react";
import SidebarElement from "./SidebarElement";
import categoryIcon from "../../Images/categoryIcon.png";
import eventIcon from "../../Images/eventIcon.png";
import locationIcon from "../../Images/locationIcon.png";
import settingsIcon from "../../Images/settingsIcon.png";
import logoutIcon from "../../Images/logoutIcon.png";
const Sidebar = () => {
  return (
    <div className="h-screen min-w-[300px] flex flex-col justify-between bg-[#0B2354] p-[20px] pb-[40px]">
      <h2 className="text-center border-b-[1px] border-[#3F61D9] pb-[15px]">
        <span className="text-[#3F61D9] font-bold text-[28px]">ADMIN</span>
        <span className="text-white font-medium text-[28px]"> Panel</span>
      </h2>

      <div className="flex flex-col h-[200px] mt-[-200px]">
        <SidebarElement icon={eventIcon} text="Eventi" link="/admin/event" />
        <SidebarElement
          icon={categoryIcon}
          text="Kategorije"
          link="/admin/category"
        />
        <SidebarElement
          icon={locationIcon}
          text="Lokacije"
          link="/admin/location"
        />
      </div>

      <div className="flex flex-col h-[100px] border-t-[1px] border-[#3F61D9]">
        <SidebarElement
          icon={settingsIcon}
          text="Postavke"
          link="/admin/settings"
        />
        <SidebarElement icon={locationIcon} text="Odjava" />
      </div>
    </div>
  );
};

export default Sidebar;
