import box from "../../../assets/images/box.svg";
import dopis from "../../../assets/images/dopis.svg";
import paleta from "../../../assets/images/paleta.svg";
import container from "../../../assets/images/container.svg";
import truck from "../../../assets/images/truck.svg";
import horse from "../../../assets/images/horse.svg";

import { useTranslation } from "react-i18next";

const TypePackage = () => {
  const { t } = useTranslation();

  return (
    <div className='flex gap-x-[40px] w-[965px] relative after:content-[""] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E9E9FF] after:w-full after:h-[3px]'>
      <div className="form-shipping-row-single">
        <img src={box} alt="Package logo" />
        <p>{t("RegularPackage")}</p>
      </div>
      <div className="form-shipping-row-single">
        <img src={dopis} alt="Letter logo" />
        <p>{t("Letter")}</p>
      </div>
      <div className="form-shipping-row-single">
        <img src={paleta} alt="Palette logo" />
        <p>{t("Palette")}</p>
      </div>
      <div className="form-shipping-row-single">
        <img src={container} alt="Container logo" />
        <p>{t("Container")}</p>
      </div>
      <div className="form-shipping-row-single">
        <img src={truck} alt="Truck logo" />
        <p>{t("TruckVan")}</p>
      </div>
      <div className="form-shipping-row-single">
        <img src={horse} alt="Horse logo" />
        <p>{t("NonStandard")}</p>
      </div>
    </div>
  );
};

export default TypePackage;
