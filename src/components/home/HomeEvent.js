import { Link } from "react-router-dom";

const HomeEvent = (props) => {
  const date1 = new Date(props.event.date);
  const date2 = new Date();
  const dateBool = date2.getTime() - date1.getTime() > 0;
  const stylesDate = dateBool
    ? "w-[30%] text-white text-[15px] font-extrabold text-[#b91c1c] shadow-black-lg"
    : "w-[30%] text-white text-[15px] font-extrabold text-[#65a30d] shadow-black-lg";
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
        <h2 className={stylesDate}>{props.event.date}</h2>
        <h2 className="text-[15px] text-white">{props.event.location.name}</h2>
      </div>
    </Link>
  );
};

export default HomeEvent;
