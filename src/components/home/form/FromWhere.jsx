import zipcode from "../../../assets/images/zipcode.svg";
import city from "../../../assets/images/mesto.svg";
import reverse from "../../../assets/images/reverse.svg";

import { useTranslation } from "react-i18next";
import "./Form.css";

const FromWhere = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[64px]">
      <div className="inputs flex max-w-[965px] justify-between relative">
        <img
          className="absolute cursor-pointer left-[49.25%] bottom-[54%]"
          src={reverse}
          alt="Šipky pro prohození zemí"
        />
        {/* ODKUD */}
        <div className="max-w-[435px] w-[50%]">
          <h4 className="text-[16px] font-bold mb-[18px]">{t("From")}</h4>
          <select className="form-input w-full" name="from" id="from">
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
          </select>
          <div className="flex gap-[3%] mt-[3%]">
            <div className="relative w-[67%]">
              <img
                className="absolute left-[14px] bottom-[18.5px]"
                src={city}
                alt="City icon"
              />
              <input
                className="form-input-w-img w-full placeholder:text-primaryBlue"
                type="text"
                placeholder={t("CityPlaceholder")}
              />
            </div>
            <div className="relative w-[30%]">
              <img
                className="absolute left-[14px] bottom-[18px]"
                src={zipcode}
                alt="ZIP icon"
              />
              <input
                className="form-input-w-img w-full placeholder:text-primaryBlue"
                type="text"
                placeholder={t("ZipPlaceholder")}
              />
            </div>
          </div>
        </div>
        {/* KAM */}
        <div className="max-w-[435px] w-[50%]">
          <h4 className="text-[16px] font-bold mb-[18px]">{t("To")}</h4>
          <select className="form-input w-full" name="to" id="to">
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
          </select>
          <div className="flex gap-[3%] mt-[3%]">
            <div className="relative w-[67%]">
              <img
                className="absolute left-[14px] bottom-[18.5px]"
                src={city}
                alt="City icon"
              />
              <input
                className="form-input-w-img w-full placeholder:text-primaryBlue"
                type="text"
                placeholder={t("CityPlaceholder")}
              />
            </div>
            <div className="relative w-[30%]">
              <img
                className="absolute left-[14px] bottom-[18px]"
                src={zipcode}
                alt="ZIP icon"
              />
              <input
                className="form-input-w-img w-full placeholder:text-primaryBlue"
                type="text"
                placeholder={t("ZipPlaceholder")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromWhere;
