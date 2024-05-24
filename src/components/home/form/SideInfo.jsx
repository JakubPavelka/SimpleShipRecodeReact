import "./SideInfo.css";
import sidebarimg from "../../../assets/images/hpSidemenuImg.png";
import PurpleBtnNoArrow from "../../buttons/PurpleBtnNoArrow";
import PurpleArrowRight from "../../../assets/images/arrowRight.svg";
import PurpleArrowLeft from "../../../assets/images/arrowLeft.svg";

import { useTranslation } from "react-i18next";

const SideInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="side-info absolute flex-col top-0 right-0 bg-[#efefff] h-full max-w-[400px] w-full p-[59px]">
      <img
        className="mx-auto"
        src={sidebarimg}
        alt="Vector art where is man clicking on mobile and next to him there are boxes"
      />
      <p className="text-[24px] leading-[35px] text-center mt-[30px]">
        {t("DoYouSendMoreThan")}
      </p>
      <div className="flex justify-center">
        <span className='text-[24px] leading-[35px] text-center font-bold relative z-[4] after:content-[""] after:absolute after:w-full after:h-[10px] after:rounded-[2px] after:bg-[#DEDEFC] after:bottom-[5px] after:left-0 after:z-[-1]'>
          {t("PackagesAMonth")}
        </span>
      </div>
      <p className="leading-[27px] text-center mt-5 mb-8">
        {t("DontHesitateToContactUsForAn")}
        <span className="block">{t("IndividualDiscount")}</span>
      </p>
      <PurpleBtnNoArrow text={t("ContactUs")} />

      <div className="flex gap-x-4 justify-center mt-[50px]">
        <div className="border border-customPurple rounded-[10px] py-[13px] px-[18px] cursor-pointer">
          <img src={PurpleArrowLeft} alt="Arrow left" />
        </div>
        <div className="border border-customPurple rounded-[10px] py-[13px] px-[18px] cursor-pointer ">
          <img src={PurpleArrowRight} alt="Arrow right" />
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
