import CategoryForm from "./CategoryForm";

const CategoryModal = (props) => {
  return (
    <div
      onClick={(event) => {
        props.toggleModal();
      }}
      className="flex justify-center items-center absolute w-[100%] h-[100%] top-0 right-0 backdrop-blur-[2px] bg-white/30 z-10"
    >
      <div className="z-20 flex flex-col items-center w-[100%] max-w-[800px] h-[100%] max-h-[400px] bg-white border-2 border-[#0B2354] rounded-lg">
        <h2 className="px-[15px] text-[22px] font-bold text-[#0B2354] border-b-[1px] border-[#3F61D9]">
          {props.method === "POST"
            ? "Dodavanje Kategorije"
            : "Uredjivanje Kategorije"}
        </h2>
        <CategoryForm
          method={props.method}
          id={props.id}
          name={props.name}
          icon={props.icon}
        />
      </div>
    </div>
  );
};

export default CategoryModal;
