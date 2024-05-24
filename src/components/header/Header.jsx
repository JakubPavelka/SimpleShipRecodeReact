import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-primaryBlue relative h-[630px] mb-[-460px]">
      <Navbar />
      <div className="containerc">
        <p className="text-center md:text-left text-[25px] leading-[37px] text-white mt-[45px] md:mt-[64px]">
          {t("WeSimplyConnectThe")}
          <span className='relative z-[4] after:content-[""] after:absolute after:w-full after:h-[10px] after:rounded-[2px] after:bg-[#313a90] after:bottom-[5px] after:left-0 after:z-[-1]'>
            {t("world")}
          </span>
          .
        </p>
      </div>
    </header>
  );
};

export default Header;
