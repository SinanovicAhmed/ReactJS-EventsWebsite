import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useEffect } from "react";

const PostFormEvent = (props) => {
  const [event, setEvent] = useState({
    name: props.name,
    description: props.description,
    category_id: props.category.id,
    location_id: props.location.id,
    date: props.date,
    image_url: props.image,
  });

  const [categories, setCategories] = useState();
  const [locations, setLocations] = useState();
  const [image, setImage] = useState("");

  const postEvent = async (e) => {
    e.preventDefault();
    if (props.method === "POST") {
      const response = await fetch("http://localhost:8080/api/events/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }).then(props.rerender());

      console.log(JSON.stringify(event));
    } else {
      console.log("UPDATE");
      const response = await fetch(
        "http://localhost:8080/api/events/update/" + props.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      ).then(props.rerender());
    }
  };

  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/api/categories");
    const categories = await response.json();
    setCategories(categories);
  };

  const getLocations = async () => {
    const response = await fetch("http://localhost:8080/api/locations");
    const locations = await response.json();
    setLocations(locations);
  };

  useEffect(() => {
    getCategories();
    getLocations();
  }, []);
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
              value={event.category_id}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, category_id: e.target.value };
                })
              }
            >
              <option value=""></option>
              {categories &&
                categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={category.id === props.category.id}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Lokacija</label>
            <select
              required
              id="location"
              name="location"
              className="bg-[#EBEBEB] rounded-full px-[5px]"
              value={event.location_id}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, location_id: e.target.value };
                })
              }
            >
              <option value=""></option>
              {locations &&
                locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-[70%] flex flex-col my-[8px]">
            <label className="text-[#535353] font-bold">Datum</label>
            <input
              required
              value={event.date}
              onChange={(e) =>
                setEvent((prevState) => {
                  return { ...prevState, date: e.target.value.toString() };
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
              value={event.image_url}
              onChange={(e) => {
                setEvent((prevState) => {
                  return { ...prevState, image_url: e.target.value };
                });
              }}
              className="bg-[#EBEBEB] rounded-full px-[5px]"
            />
            <button type="button" onClick={() => setImage(event.image_url)}>
              Preview image
            </button>
          </div>
          <div className="w-[70%] h-[200px] rounded-full">
            <img className="object-fill" src={image} />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="py-[10px] px-[5px] bg-[#0B2354] text-white rounded-b-lg"
      >
        {props.method === "POST" ? "Dodaj" : "Uredi"}
      </button>
    </form>
  );
};

export default PostFormEvent;
