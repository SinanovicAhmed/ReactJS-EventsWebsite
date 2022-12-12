import { useState, useEffect } from "react";
import { Comment } from "./Comment";

export const CommentsList = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await fetch("http://localhost:8080/api/comments");
    if (response.ok) setComments(await response.json());
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-start items-center border-t-[1px] border-indigo-500 mt-[15px] overflow-auto">
      {comments?.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};
