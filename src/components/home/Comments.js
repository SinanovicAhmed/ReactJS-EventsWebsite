import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import usePost from "../../customHooks/usePost";
const Comments = (props) => {
  const cx = useContext(UserContext);
  const [comment, setComment] = useState({
    comment: "",
    user_id: cx.user.id || "", //dodati user id iz contexa,
    event_id: props.event_id,
  });
  const { response, post } = usePost("POST");

  const postComment = async (e) => {
    e.preventDefault();
    post("http://localhost:8080/api/comments/save", comment);
    setComment((prevState) => ({ ...prevState, comment: "" }));
    setTimeout(() => {
      props.refetchComments();
    }, 1000);
  };

  if (!props.comments) return <p>Loading...</p>;
  return (
    <div className="w-[100%]">
      <form
        onSubmit={postComment}
        className="w-[100%] my-[10px] flex justify-between px-[5px]"
      >
        <input
          required
          placeholder="Ostavite novi komentar:"
          className="w-[80%] flex bg-white rounded-full my-[2px] px-[5px] border-[1px] border-[#ababab]"
          value={comment.comment}
          onChange={(e) =>
            setComment((prevState) => ({
              ...prevState,
              comment: e.target.value,
            }))
          }
        />
        <button
          type="sumbit"
          className="bg-[#0B2354] text-white px-[4px] py-[2px] rounded-full cursor-pointer"
        >
          Komentiraj
        </button>
      </form>
      <div className="w-[100%] mb-[30px]">
        {props.comments.length === 0 && (
          <p className="text-center">Nema komentara...</p>
        )}
        {props.comments.map((comment) => (
          <div
            key={comment.id}
            className="w-[100%] flex bg-white rounded-full my-[4px] px-[5px]"
          >
            <p className="w-[80%]">{comment.comment}</p>
            <p className="w-[20%] flex justify-end">{comment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
