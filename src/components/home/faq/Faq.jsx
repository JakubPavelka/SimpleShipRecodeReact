import plus from "../../../assets/images/plus.svg";
import minus from "../../../assets/images/minus.svg";

import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[130px]">
      <div className="containerc">
        <h2 className="text-[45px] font-bold leading-[30px] text-center mb-[80px]">
          {t("faq")}
        </h2>
        <section className="flex gap-[68px]">
          {/* COL 1 */}
          <div className="max-w-[586px] w-full">
            <div className="flex justify-between">
              <p>Jaké jsou možnosti platby za objednávku?</p>
              <img className="cursor-pointer" src={plus} alt="faq icon" />
            </div>
          </div>
          {/* COL 2 */}
          <div className="max-w-[586px] w-full">
            <div className="flex justify-between">
              <p>Je možné objednat přepravu na fakturu?</p>
              <img className="cursor-pointer" src={plus} alt="faq icon" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Faq;
