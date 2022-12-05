import { Link } from "react-router-dom";

const HomeEvent = (props) => {
  return (
    <Link
      to={`${props.event.id}`}
      className="w-[400px] m-[20px] flex flex-col cursor-pointer items-center rounded-lg hover:scale-[1.01] transition-all"
    >
      <img className="w-[100%] h-[250px]" src={props.event.image_url} />
      <div className="w-[100%] bg-[#3F61D9] flex justify-between items-center rounded-b-lg px-[10px]">
        <h2 className="w-[40%] truncate text-[20px] text-white font-bold">
          {props.event.name}
        </h2>
        <h2 className="w-[30%] text-white text-[15px]">{props.event.date}</h2>
        <h2 className="text-[15px] text-white">{props.event.location.name}</h2>
      </div>
    </Link>
  );
};

export default HomeEvent;
