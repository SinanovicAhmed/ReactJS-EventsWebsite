import Navbar from "../components/home/Navbar";
import HomeEventList from "../components/home/HomeEventList";
import { useState, useEffect } from "react";
const UserHome = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  const getEvents = async () => {
    const response = await fetch("http://localhost:8080/api/events");
    const event = await response.json();
    setEvents(event);
  };
  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/api/categories");
    const category = await response.json();
    setCategories(category);
  };
  const getLocations = async () => {
    const response = await fetch("http://localhost:8080/api/locations");
    const location = await response.json();
    setLocations(location);
  };
  useEffect(() => {
    getEvents();
    getCategories();
    getLocations();
  }, []);

  return (
    <div className="w-[100%] h-screen bg-[#EFEEEE]">
      <Navbar />
      <HomeEventList
        events={events}
        categories={categories}
        locations={locations}
      />
    </div>
  );
};

export default UserHome;
