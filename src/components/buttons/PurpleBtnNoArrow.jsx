import "./PurpleBtnArrow.css";

const PurpleBtnNoArrow = ({ text }) => {
  return (
    <button className="purpleBtnArrow relative w-full bg-customPurple mx-auto block max-w-[180px] justify-center text-white text-[14px] font-bold items-center py-[15px] rounded-xl tracking-[0.5px]">
      {text}
    </button>
  );
};

export default PurpleBtnNoArrow;
