import { useState } from "react";

const CategoryForm = (props) => {
  const [category, setCategory] = useState({
    name: props.name,
    icon: props.icon,
  });
  const [responseMsg, setResponseMsg] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (props.method === "POST") {
      try {
        const response = await fetch(
          "http://localhost:8080/api/categories/save",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
          }
        );
        setResponseMsg(await response.text()).then(props.rerender());
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await fetch(
          "http://localhost:8080/api/categories/updateCategory/" + props.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
          }
        );
        setResponseMsg(await response.text()).then(props.rerender());
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <>
      {responseMsg ? <h2>{responseMsg}</h2> : <h2>.</h2>}
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
