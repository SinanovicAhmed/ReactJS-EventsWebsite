import RegistrationForm from "../components/loginRegistration/RegistrationForm";

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen bg-[#0B2354] flex justify-center items-center">
      <div className="max-w-[500px] w-[100%] h-[60%] bg-white/40 rounded-lg flex flex-col items-center">
        <h2 className="text-[25px] font-extrabold text-center pt-[10px]">
          Registracija
        </h2>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
