import howItWorksCz from "../../../assets/images/howItWorksCs.jpg";
import howItWorksEn from "../../../assets/images/howItWorksEn.jpg";

import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="bg-[#f5f5ff] py-[120px] max-w-[1700px] mx-auto rounded-[30px]">
      <div className="containerc">
        <div>
          <img
            src={currentLanguage === "cs" ? howItWorksCz : howItWorksEn}
            alt="How it works"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
