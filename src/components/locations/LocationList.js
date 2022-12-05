import CategoryModal from "../categories/CategoryModal";
import LocationModal from "./LocationModal";

import { useState } from "react";
const LocationList = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-[100%] max-w-[1000px] px-[20px] p-[5px] my-[8px] flex justify-center items-center gap-5 bg-white">
      {showModal && (
        <LocationModal
          method="PUT"
          location={props.location}
          toggleModal={toggleModal}
        />
      )}
      <h2 className="w-[30%] truncate border-r-[1px] border-gray">
        {props.location ? props.location.name : "Naziv"}
      </h2>
      <h2 className="w-[30%] truncate border-r-[1px] border-gray">
        {props.location ? props.location.details : "Detalji"}
      </h2>
      <h2 className="w-[40%] truncate border-r-[1px] border-gray">
        {props.location ? <img src={props.location.image_url} /> : "Slika"}
      </h2>
      {!props.header ? (
        <button
          className="w-[100px] rounded-full bg-[#0B2354] text-white"
          onClick={() => toggleModal()}
        >
          Uredi
        </button>
      ) : (
        <div className="w-[100px] opacity-0"></div>
      )}
    </div>
  );
};
export default LocationList;
