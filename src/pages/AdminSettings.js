import usePost from "../customHooks/usePost";
import { useState } from "react";
import { CommentsList } from "../components/commentsAdmin/CommentsList";
const AdminSettings = ({ id }) => {
  const { response, post } = usePost("PUT");
  const [password, setPassword] = useState("");
  const updatePassoword = (e) => {
    e.preventDefault();
    post("http://localhost:8080/api/users/updatepassword/" + id, password);
  };
  return (
    <div className="w-[100%] h-screen flex flex-col">
      <form
        onSubmit={updatePassoword}
        className="w-[100%] flex justify-center mt-[20px]"
      >
        <input
          placeholder="Nova sifra"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="ml-[20px] w-[100px] h-[30px]  rounded-full bg-[#0B2354] text-white my-auto"
          type="submit"
        >
          Promijeni
        </button>
      </form>
      <CommentsList />
    </div>
  );
};

export default AdminSettings;
