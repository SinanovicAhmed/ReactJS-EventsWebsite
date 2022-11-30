const Navbar = () => {
  return (
    <div className="w-[100%] flex justify-center h-[50px] bg-[#0B2354]">
      <div className="w-[80%] flex justify-between items-center">
        <h2 className="text-[20px] text-white">Welcome user</h2>
        <button className="border-[1px] border-white rounded-lg text-white font-bold py-[5px] px-[10px] hover:bg-white/20">
          Odjava
        </button>
      </div>
    </div>
  );
};

export default Navbar;
