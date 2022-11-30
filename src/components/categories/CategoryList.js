import CategoryModal from "./CategoryModal";
import { useState } from "react";
const CategoryList = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="w-[100%] max-w-[400px] px-[20px] p-[5px] my-[8px] flex justify-center gap-5 bg-white">
      {showModal && (
        <CategoryModal
          method="PUT"
          id={props.id}
          name={props.name}
          icon={props.icon}
          toggleModal={toggleModal}
        />
      )}
      <h2 className="w-[50%] truncate border-r-[1px] border-gray">
        {props.name}
      </h2>
      <h2 className="w-[50%] truncate border-r-[1px] border-gray">
        {props.icon === "Ikona" ? "Ikona" : <img src={props.icon} />}
      </h2>
      {!props.header ? (
        <button
          className="w-[100px] rounded-full bg-[#0B2354] text-white"
          onClick={() => toggleModal()}
        >
          Uredi
        </button>
      ) : (
        <div className="w-[100px] opacity-0"></div>
      )}
    </div>
  );
};

export default CategoryList;
