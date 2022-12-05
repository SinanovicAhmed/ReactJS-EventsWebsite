import React from "react";
import { useState, useEffect } from "react";
import LocationModal from "../components/locations/LocationModal";
import LocationList from "../components/locations/LocationList";
import plusIcon from "../Images/plusIcon.png";

const AdminLocation = () => {
  const [showModal, setShowModal] = useState(false);
  const [locations, setLocations] = useState();

  const getLocations = async () => {
    const response = await fetch("http://localhost:8080/api/locations");
    setLocations(await response.json());
  };
  console.log(locations);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getLocations();
  }, []);

  if (!locations) return <h2>Loading...</h2>;
  return (
    <div className="flex-1 h-screen flex items-center flex-col relative">
      {showModal && (
        <LocationModal
          method="POST"
          location={null}
          toggleModal={toggleModal}
        />
      )}
      <h2 className="text-[30px] text-[#0B2354] font-bold text-center">
        Lokacije
      </h2>
      <LocationList location={null} header={true} />
      {locations.map((location) => (
        <LocationList key={location.id} location={location} header={false} />
      ))}
      <div className="w-[100%] h-full bg-[#EFEEEE] rounded-lg relative overflow-scroll">
        <div
          onClick={() => setShowModal(true)}
          className="w-[50px] h-[50px] fixed bottom-10 right-10 bg-[#0B2354] rounded-full flex justify-center items-center cursor-pointer hover:scale-105"
        >
          <img src={plusIcon} />
        </div>
      </div>
    </div>
  );
};

export default AdminLocation;
