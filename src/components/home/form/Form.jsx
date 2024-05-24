import TypePackage from "./TypePackage";
import FromWhere from "./FromWhere";
import PurpleBtnArrow from "../../buttons/PurpleBtnArrow";
import Package from "./Package";
import SideInfo from "./SideInfo";
import PurpleBtnArrowForm from "../../buttons/PurpleBtnArrowForm";

import { useTranslation } from "react-i18next";
import "./Form.css";

const Form = () => {
  const { t } = useTranslation();
  return (
    <section className="shadow-form relative bg-white max-w-[1700px] mx-auto rounded-[30px] mt-[50px] py-[65px]">
      <div className="containerc">
        {/* LEVÁ STRANA */}
        {/* TYP BALÍKU */}
        <TypePackage />
        {/* ODKUD-KAM */}
        <FromWhere />
        {/* ZÁSILKA */}
        <Package />
        {/* SPOČÍTAT CENU */}
        <PurpleBtnArrowForm text={t("CalculatePrice")} />
        {/* PRAVÁ STRANA */}
        <SideInfo />
      </div>
    </section>
  );
};

export default Form;
