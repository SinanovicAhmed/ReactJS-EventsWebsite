import { useState } from "react";

const Comments = (props) => {
  const [comment, setComment] = useState({
    comment: "",
    user_id: "", //dodati user id iz contexa,
    event_id: props.event_id,
  });
  const postComment = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/events/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }).then(props.rerender());
  };

  if (!props.comments) return <p>Loading...</p>;
  return (
    <div className="w-[100%]">
      <form
        onSubmit={postComment}
        className="w-[100%] my-[10px] flex justify-between px-[5px]"
      >
        <input
          placeholder="Ostavite novi komentar:"
          className="w-[80%] flex bg-white rounded-full my-[2px] px-[5px] border-[1px] border-[#ababab]"
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
          <div className="w-[100%] flex bg-white rounded-full my-[4px] px-[5px]">
            <p className="w-[80%]">{comment.comment}</p>
            <p className="w-[20%] flex justify-end">{comment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
