import React from "react";
import { useState } from "react";
const PostFormEvent = () => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    categoryID: "",
    locationID: "",
    date: "",
    image: "",
  });
  const postEvent = (e) => {
    e.preventDefault();
    console.log("Post");
  };
  return (
    <form
      className="flex flex-col w-[100%] h-[100%] z-20"
      onSubmit={postEvent}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-[50%]">
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Naziv</label>
            <input
              required
              value={event.name}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, name: e.target.value };
                })
              }
              className="bg-[#EBEBEB] rounded-full px-[5px]"
            />
          </div>
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Opis</label>
            <input
              required
              value={event.description}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, description: e.target.value };
                })
              }
              className="bg-[#EBEBEB] rounded-full px-[5px]"
            />
          </div>
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Kategorija</label>
            <select
              required
              id="category"
              name="category"
              className="bg-[#EBEBEB] rounded-full px-[5px]"
              value={event.categoryID}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, categoryID: e.target.value };
                })
              }
            >
              <option value=""></option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Lokacija</label>
            <select
              required
              id="location"
              name="location"
              className="bg-[#EBEBEB] rounded-full px-[5px]"
              value={event.locationID}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, locationID: e.target.value };
                })
              }
            >
              <option value=""></option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Datum</label>
            <input
              required
              value={event.date}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, date: e.target.value };
                })
              }
              type="date"
              className="bg-[#EBEBEB] rounded-full px-[5px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[50%]">
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Url slika</label>
            <input
              required
              value={event.image}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, image: e.target.value };
                })
              }
              className="bg-[#EBEBEB] rounded-full px-[5px]"
            />
          </div>
          <div className="w-[70%] h-[200px] rounded-full">
            <img
              className="object-fill"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="py-[10px] px-[5px] bg-[#0B2354] text-white rounded-b-lg"
      >
        Dodaj
      </button>
    </form>
  );
};

export default PostFormEvent;
