import { useState } from "react";

const LocationForm = (props) => {
  const [location, setLocation] = useState({
    name: props.location ? props.location.name : "",
    details: props.location ? props.location.details : "",
    image_url: props.location ? props.location.image_url : "",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    if (props.method === "POST") {
      const response = await fetch("http://localhost:8080/api/locations/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      });

      console.log(JSON.stringify(location));
    }
  };
  return (
    <>
      <form
        className="flex flex-col justify-between w-[100%] h-[100%] z-20"
        onClick={(event) => event.stopPropagation()}
        onSubmit={submitForm}
      >
        <div className="flex flex-col h-[100%] justify-center items-center">
          <div className="w-[80%]">
            <label className="text-[#535353] font-bold">Lokacija</label>
            <input
              required
              value={location.name}
              onChange={(e) => {
                setLocation((prevState) => {
                  return { ...prevState, name: e.target.value };
                });
              }}
              className="w-[100%] bg-[#EBEBEB] rounded-full px-[5px]"
            />
          </div>
          <div className="w-[80%]">
            <label className="text-[#535353] font-bold">Datalji</label>
            <input
              required
              value={location.details}
              onChange={(e) => {
                setLocation((prevState) => {
                  return { ...prevState, details: e.target.value };
                });
              }}
              className="w-[100%] bg-[#EBEBEB] rounded-full px-[5px]"
            ></input>
          </div>
          <div className="w-[80%]">
            <label className="text-[#535353] font-bold">Ikona</label>
            <input
              required
              value={location.image_url}
              onChange={(e) => {
                setLocation((prevState) => {
                  return { ...prevState, image_url: e.target.value };
                });
              }}
              className="w-[100%] bg-[#EBEBEB] rounded-full px-[5px]"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="py-[10px] px-[5px] bg-[#0B2354] text-white rounded-b-lg"
        >
          {props.method === "POST" ? "Dodaj" : "Uredi"}
        </button>
      </form>
    </>
  );
};
export default LocationForm;
