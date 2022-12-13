import React from "react";
import CategoryList from "../components/categories/CategoryList";
import plusIcon from "../Images/plusIcon.png";

import { useState, useEffect } from "react";
import CategoryModal from "../components/categories/CategoryModal";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/api/categories");
    if (response.ok) {
      setCategories(await response.json());
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex-1 h-screen flex items-center flex-col relative">
      {showModal && (
        <CategoryModal
          method="POST"
          name=""
          icon=""
          toggleModal={toggleModal}
          getCategories={getCategories}
        />
      )}
      <h2 className="text-[30px] text-[#0B2354] font-bold text-center">
        Kategorije
      </h2>
      <CategoryList category="" header={true} />
      {categories.map((category) => (
        <CategoryList
          key={category.id}
          category={category}
          header={false}
          toggleModal={toggleModal}
        />
      ))}
      <div className="w-[100%] h-full bg-[#EFEEEE] rounded-lg relative overflow-scroll">
        <div
          onClick={() => setShowModal(true)}
          className="w-[50px] h-[50px] fixed bottom-10 right-10 bg-[#0B2354] rounded-full flex justify-center items-center cursor-pointer hover:scale-105"
        >
          <img src={plusIcon} />
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
