import { Link } from "react-router-dom";

const RegisterPage = () => {
  const registerHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-screen h-screen bg-[#0B2354] flex justify-center items-center">
      <div className="max-w-[500px] w-[100%] h-[60%] bg-white/40 rounded-lg flex flex-col items-center">
        <h2 className="text-[25px] font-extrabold text-center pt-[10px]">
          Registracija
        </h2>
        <form
          onSubmit={registerHandler}
          className="w-[80%] h-[100%] flex flex-col justify-center items-center"
        >
          <div className="w-[100%] flex flex-col">
            <label className="text-[#21201e] font-bold">Ime</label>
            <input className="rounded-full bg-white/40 h-[35px] px-[15px]"></input>
          </div>
          <div className="w-[100%] flex flex-col">
            <label className="text-[#21201e] font-bold">Prezime</label>
            <input className="rounded-full bg-white/40 h-[35px] px-[15px]"></input>
          </div>
          <div className="w-[100%] flex flex-col">
            <label className="text-[#21201e] font-bold">Email</label>
            <input className="rounded-full bg-white/40 h-[35px] px-[15px]"></input>
          </div>
          <div className="w-[100%] flex flex-col">
            <label className="text-[#21201e] font-bold">Lozinka</label>
            <input className="rounded-full bg-white/40 h-[35px] px-[15px]"></input>
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
      </div>
    </div>
  );
};

export default RegisterPage;
