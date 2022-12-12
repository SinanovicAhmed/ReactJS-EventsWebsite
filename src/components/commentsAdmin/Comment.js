import usePost from "../../customHooks/usePost";
export const Comment = ({ comment }) => {
  const { response, post } = usePost("PUT");
  const handleBan = () => {
    post("http://localhost:8080/api/users/updatebanned/" + comment.user.id, {});
    console.log(response);
  };
  return (
    <div className="w-[90%] flex justify-between my-[5px]">
      <p className="w-[10%]">{comment.user.name}</p>
      <p className="w-[40%]">{comment.comment}</p>
      <p className="w-[10%]">{comment.date}</p>
      <button
        onClick={handleBan}
        className="ml-[20px] w-[100px] h-[30px]  rounded-full bg-[#0B2354] text-white my-auto"
      >
        {comment.user.banned ? "Unban" : "Ban"}
      </button>
    </div>
  );
};
