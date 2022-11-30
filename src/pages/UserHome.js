import Navbar from "../components/home/Navbar";
import HomeEventList from "../components/home/HomeEventList";
import { useState, useEffect } from "react";
const UserHome = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch("http://localhost:8080/api/events");
    const event = await response.json();
    setEvents(event);
  };
  useEffect(() => {
    getEvents();
  }, []);
  console.log(events);
  return (
    <div className="w-[100%] h-screen bg-[#EFEEEE]">
      <Navbar />
      <HomeEventList events={events} />
    </div>
  );
};

export default UserHome;
