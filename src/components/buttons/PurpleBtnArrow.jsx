import React from "react";
import PropTypes from "prop-types";
import ArrowRightWhite from "../../assets/images/arrowRightWhite.svg";
import "./PurpleBtnArrow.css";

const PurpleBtnArrow = ({ text, className }) => {
  return (
    <button
      className={`purpleBtnArrow relative flex w-full bg-customPurple mt-[62px] max-w-[965px] justify-center text-white text-[19px] font-bold items-center py-[15px] rounded-xl ${className}`}
    >
      {text}
      <img
        className="absolute right-[35px]"
        src={ArrowRightWhite}
        alt="Arrow right"
      />
    </button>
  );
};

PurpleBtnArrow.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PurpleBtnArrow.defaultProps = {
  className: "",
};

export default PurpleBtnArrow;
