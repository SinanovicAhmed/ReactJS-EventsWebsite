import { useState, useEffect } from "react";
import HomeEvent from "./HomeEvent";
import { filterEvents } from "../filter/filterEvents";

const EventList = ({ events, locations, categories }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchParams, setSearchParams] = useState({
    search: "",
    category: null,
    location: null,
  });

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);
  useEffect(() => {
    setFilteredEvents(filterEvents(events, searchParams));
  }, [searchParams]);

  if (!locations || !categories || !events) return <h2>Loading...</h2>;
  return (
    <div className="w-[100%] flex justify-center items-center flex-wrap">
      <form
        className="flex justify-around w-[80%] my-[10px]"
        onSubmit={filterEvents}
      >
        <input
          placeholder="Search by name..."
          onChange={(e) => {
            setSearchParams((prevState) => {
              return { ...prevState, search: e.target.value };
            });
          }}
        />
        <select
          onChange={(e) => {
            setSearchParams((prevState) => {
              return { ...prevState, location: e.target.value };
            });
          }}
        >
          <option value="" disabled selected>
            Search by locations
          </option>
          {locations.map((location) => (
            <option value={location.id}>{location.name}</option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setSearchParams((prevState) => {
              return { ...prevState, category: e.target.value };
            });
          }}
        >
          <option value="" disabled selected>
            Search by category
          </option>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
      </form>
      {filteredEvents?.map((event) => (
        <HomeEvent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
