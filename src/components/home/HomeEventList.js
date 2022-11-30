import HomeEvent from "./HomeEvent";
const EventList = (props) => {
  return (
    <div className="w-[100%] flex justify-center items-center flex-wrap">
      {props.events.map((event) => (
        <HomeEvent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
