import dpd from "../../../assets/images/dpd.png";
import fedex from "../../../assets/images/fedex.png";
import toptrans from "../../../assets/images/toptrans.png";
import tnt from "../../../assets/images/tnt.png";
import gls from "../../../assets/images/gls.png";
import ups from "../../../assets/images/ups.png";

import { useTranslation } from "react-i18next";
import "./Carriers.css";

const Carriers = () => {
  const { t } = useTranslation();
  return (
    // <div className="containerc flex items-center">
    //   <h2 className="text-[24px] font-bold leading-[30px]">{t("Carriers")}</h2>
    //   <div className="flex items-center justify-between">
    //     <img className="w-full max-h-[39px]" src={dpd} alt="dpd logo" />
    //     <img className="w-full max-h-[29px]" src={fedex} alt="fedex logo" />
    //     <img
    //       className="w-full max-h-[28px]"
    //       src={toptrans}
    //       alt="toptrans logo"
    //     />
    //     <img className="w-full max-h-[28px]" src={tnt} alt="tnt logo" />
    //     <img className="w-full max-h-[23px]" src={gls} alt="gls logo" />
    //     <img className="w-full max-h-[46px]" src={ups} alt="ups logo" />
    //   </div>

    // </div>
    <div className="containerc">
      <div className="carriers-grid grid place-items-center grid-cols-7 my-[60px] lg:my-[100px]">
        <h2 className="carriers-heading text-[24px] font-bold leading-[30px]">
          {t("Carriers")}
        </h2>
        <img className="carriers-dpd" src={dpd} alt="dpd logo" />
        <img className="carriers-fedex" src={fedex} alt="fedex logo" />
        <img className="carriers-toptrans" src={toptrans} alt="toptrans logo" />
        <img className="carriers-tnt" src={tnt} alt="tnt logo" />
        <img className="carriers-gls" src={gls} alt="gls logo" />
        <img className="carriers-ups" src={ups} alt="ups logo" />
      </div>
    </div>
  );
};

export default Carriers;
