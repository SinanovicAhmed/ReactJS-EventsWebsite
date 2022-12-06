import { Link } from "react-router-dom";

const LoginPage = () => {
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <div className="w-screen h-screen bg-[#0B2354] flex justify-center items-center">
      <div className="max-w-[500px] w-[100%] h-[50%] bg-white/40 rounded-lg flex flex-col items-center">
        <h2 className="text-[25px] font-extrabold text-center pt-[10px]">
          Prijava
        </h2>
        <form
          onSubmit={loginHandler}
          className="w-[80%] h-[100%] flex flex-col justify-center items-center"
        >
          <div className="w-[100%] flex flex-col">
            <label className="text-[#21201e] font-bold">Korisničko ime</label>
            <input className="rounded-full bg-white/40 h-[35px] px-[15px]"></input>
          </div>
          <div className="w-[100%] flex flex-col mt-[10px]">
            <label className="text-[#21201e] font-bold">Lozinka</label>
            <input className="rounded-full bg-white/40 h-[35px] px-[15px]"></input>
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
      </div>
    </div>
  );
};

export default LoginPage;
