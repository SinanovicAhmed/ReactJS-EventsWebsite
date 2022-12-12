import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
const Navbar = () => {
  const cx = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () => {
    cx.setLoggedIn(false);
    cx.setUser({});
    navigate("/login");
  };
  return (
    <div className="w-[100%] flex justify-center h-[50px] bg-[#0B2354]">
      <div className="w-[80%] flex justify-between items-center">
        <h2 className="text-[20px] text-white">Welcome {cx.user.name}</h2>
        <button
          onClick={logout}
          className="border-[1px] border-white rounded-lg text-white font-bold py-[5px] px-[10px] hover:bg-white/20"
        >
          Odjava
        </button>
      </div>
    </div>
  );
};

export default Navbar;
