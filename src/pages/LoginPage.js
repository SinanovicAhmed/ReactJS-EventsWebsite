import LoginForm from "../components/loginRegistration/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-[#0B2354] flex justify-center items-center">
      <div className="max-w-[500px] w-[100%] h-[50%] bg-white/40 rounded-lg flex flex-col items-center">
        <h2 className="text-[25px] font-extrabold text-center pt-[10px]">
          Prijava
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
