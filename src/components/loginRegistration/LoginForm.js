import { Link } from "react-router-dom";
import { useState } from "react";
import usePost from "../../customHooks/usePost";
const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { response, post } = usePost();
  console.log(response);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        post("http://localhost:8080/api/users/login", user);
      }}
      className="w-[80%] h-[100%] flex flex-col justify-center items-center"
    >
      <div className="w-[100%] flex flex-col">
        <label className="text-[#21201e] font-bold">Korisničko ime</label>
        <input
          className="rounded-full bg-white/40 h-[35px] px-[15px]"
          onChange={(e) => {
            setUser((prevState) => {
              return { ...prevState, email: e.target.value };
            });
          }}
        ></input>
      </div>
      <div className="w-[100%] flex flex-col mt-[10px]">
        <label className="text-[#21201e] font-bold">Lozinka</label>
        <input
          className="rounded-full bg-white/40 h-[35px] px-[15px]"
          onChange={(e) => {
            setUser((prevState) => {
              return { ...prevState, password: e.target.value };
            });
          }}
        ></input>
      </div>
      <button
        type="sumbit"
        className="mt-[15px] bg-[#0B2354] text-white font-bold py-[5px] px-[10px] rounded-full"
      >
        Prijavi se
      </button>
      <div className="flex mt-[4px]">
        <p className="font-medium pr-[5px] text-[14px]">Nemate profil?</p>
        <Link
          to={"/register"}
          type="button"
          className="text-[#0B2354] text-[14px] font-bold"
        >
          Registrujte se ovdje
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;