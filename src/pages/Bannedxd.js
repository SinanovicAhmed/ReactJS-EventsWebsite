import { Link } from "react-router-dom";
const Bannedxd = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-800">
      <h2 className="text-[25px] text-white font-bold">Banovani ste</h2>
      <Link
        to={"/login"}
        className="py-[5px] px-[10px] rounded-full mt-[10px] bg-white/20 fond-bold"
      >
        Nazad
      </Link>
    </div>
  );
};

export default Bannedxd;
