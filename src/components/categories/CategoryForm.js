import { useState } from "react";
import usePost from "../../customHooks/usePost";
const CategoryForm = (props) => {
  const [category, setCategory] = useState({
    name: props.name,
    icon: props.icon,
  });
  const { response: responsePost, post } = usePost("POST");
  const { response: resonsePut, post: put } = usePost("PUT");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (props.method === "POST") {
      post("http://localhost:8080/api/categories/save", category);
    } else {
      put(
        "http://localhost:8080/api/categories/updateCategory/" + props.id,
        category
      );
    }
  };
  return (
    <>
      <form
        className="flex flex-col justify-between w-[100%] h-[100%] z-20"
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col h-[100%] justify-center items-center">
          <div className="w-[80%]">
            <label className="text-[#535353] font-bold">Kategorija</label>
            <input
              required
              value={category.name}
              onChange={(e) => {
                setCategory((prevState) => {
                  return { ...prevState, name: e.target.value };
                });
              }}
              className="w-[100%] bg-[#EBEBEB] rounded-full px-[5px]"
            ></input>
          </div>
          <div className="w-[80%]">
            <label className="text-[#535353] font-bold">Ikona</label>
            <input
              required
              value={category.icon}
              onChange={(e) => {
                setCategory((prevState) => {
                  return { ...prevState, icon: e.target.value };
                });
              }}
              className="w-[100%] bg-[#EBEBEB] rounded-full px-[5px]"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="py-[10px] px-[5px] bg-[#0B2354] text-white rounded-b-lg"
        >
          {props.method === "POST" ? "Dodaj" : "Uredi"}
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
