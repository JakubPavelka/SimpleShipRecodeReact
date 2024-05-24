import copy from "../../../assets/images/copy.svg";
import newIcon from "../../../assets/images/new.svg";

import { useTranslation } from "react-i18next";
import "./Form.css";

const Package = () => {
  const { t } = useTranslation();
  return (
    <section className="form-zasilka mt-[45px] max-w-[965px]">
      <h4 className="font-bold mb-[10px]">{t("Package")}</h4>
      <div className="grid grid-form text-[15px] relative">
        {/* HMOTNOST */}
        <div className="flex items-center gap-[20px]">
          <input
            type="number"
            className="form-input placeholder:text-primaryBlue max-w-[124px]"
            placeholder={t("Weight")}
          />
          <p>kg</p>
        </div>
        {/* DÉLKA */}
        <div className="flex items-center gap-[20px]">
          <input
            type="number"
            className="form-input placeholder:text-primaryBlue max-w-[92px]"
            placeholder={t("Length")}
          />
          <p>x</p>
          <input
            type="number"
            className="form-input placeholder:text-primaryBlue max-w-[92px]"
            placeholder={t("Width")}
          />
          <p>x</p>
          <input
            type="number"
            className="form-input placeholder:text-primaryBlue max-w-[92px]"
            placeholder={t("Height")}
          />
          <p>cm</p>
        </div>
        <div className="flex items-center gap-[20px] ml-3">
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <img src={copy} alt="Copy icon" />
            <p className="text-secondaryBlue underline underline-offset-[2px] hover:no-underline">
              {t("Copy")}
            </p>
          </div>
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <img src={newIcon} alt="New package icon" />
            <p className="text-secondaryBlue underline underline-offset-[2px] hover:no-underline">
              {t("NewPackage")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
