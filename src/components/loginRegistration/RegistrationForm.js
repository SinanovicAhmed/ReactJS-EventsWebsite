import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import usePost from "../../customHooks/usePost";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    banned: false,
  });
  const navigate = useNavigate();
  const { response, post } = usePost("POST");

  const handleRegister = (e) => {
    e.preventDefault();
    post("http://localhost:8080/api/users/save", user);
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-[80%] mt-[25px] flex flex-col justify-center items-center"
    >
      {response != "" ? (
        <h2 className="text-center">{response}</h2>
      ) : (
        <div className="h-[23px]"></div>
      )}
      <div className="w-[100%] flex flex-col">
        <label className="text-[#21201e] font-bold">Ime</label>
        <input
          required
          className="rounded-full bg-white/40 h-[35px] px-[15px]"
          onChange={(e) => {
            setUser((prevState) => {
              return { ...prevState, name: e.target.value };
            });
          }}
        ></input>
      </div>
      <div className="w-[100%] flex flex-col">
        <label className="text-[#21201e] font-bold">Prezime</label>
        <input
          required
          className="rounded-full bg-white/40 h-[35px] px-[15px]"
          onChange={(e) => {
            setUser((prevState) => {
              return { ...prevState, surname: e.target.value };
            });
          }}
        ></input>
      </div>
      <div className="w-[100%] flex flex-col">
        <label className="text-[#21201e] font-bold">Email</label>
        <input
          required
          className="rounded-full bg-white/40 h-[35px] px-[15px]"
          onChange={(e) => {
            setUser((prevState) => {
              return { ...prevState, email: e.target.value };
            });
          }}
        ></input>
      </div>
      <div className="w-[100%] flex flex-col">
        <label className="text-[#21201e] font-bold">Lozinka</label>
        <input
          required
          type="password"
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
        Registrujte se
      </button>
      <div className="flex mt-[4px]">
        <p className="font-medium pr-[5px] text-[14px]">Imate profil?</p>
        <Link
          to={"/login"}
          type="button"
          className="text-[#0B2354] text-[14px] font-bold"
        >
          Prijavite se ovdje
        </Link>
      </div>
    </form>
  );
};
export default RegistrationForm;
