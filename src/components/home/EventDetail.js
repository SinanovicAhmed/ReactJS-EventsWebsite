import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
const EventDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="w-[100%] h-screen">
      <Navbar />
    </div>
  );
};

export default EventDetail;
