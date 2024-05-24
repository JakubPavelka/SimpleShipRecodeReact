import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logoSimpleship.png";
import arrowDownWhite from "../../assets/images/arrowDownWhite.svg";
import cart from "../../assets/images/cart.png";
import czflag from "../../assets/images/czechFlag.svg";
import hamburger from "../../assets/images/hamburger.svg";

import { useTranslation } from "react-i18next";
import Login from "./Login";
const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="containerc">
        <nav className="flex justify-between pt-[30px] text-white">
          <NavLink
            className="flex items-center w-[55%] sm:w-auto tablet:w-[20%] xl:w-auto"
            to="/"
          >
            <img src={logo} alt="Simpleship logo" />
          </NavLink>

          <div className="hidden tablet:flex items-center gap-x-5 xl:gap-x-9">
            <NavLink
              className="flex gap-x-[5px] lg:gap-x-[10px]"
              to="/services"
            >
              {t("Services")} <img src={arrowDownWhite} alt="Arrow down" />
            </NavLink>
            <NavLink to="/pricing">{t("Pricing")}</NavLink>
            <NavLink to="#faq">{t("FAQ")}</NavLink>
            <NavLink to="/blog">{t("Blog")}</NavLink>
            <NavLink to="/contact">{t("Contact")}</NavLink>
          </div>

          <div className="hidden tablet:flex items-center gap-x-3 xl:gap-x-6">
            <NavLink to="/cart">
              <img src={cart} alt="Shopping basket icon" />
            </NavLink>
            <p className="flex items-center gap-x-[5px] lg:gap-x-[10px] cursor-pointer">
              CZK
              <span>
                <img src={arrowDownWhite} alt="Arrow down" />
              </span>
            </p>
            <div className="flex gap-x-[5px] lg:gap-x-[10px] cursor-pointer">
              <img src={czflag} alt="Czech flag" />
              <img src={arrowDownWhite} alt="Arrow down" />
            </div>
            <Login />
          </div>
          <div className="flex tablet:hidden items-center gap-[9px] border border-lightBlue rounded-[12px] px-[15px] py-[8px] cursor-pointer hover:bg-lightBlue transition">
            <img src={hamburger} alt="hamburger icon" />
            <p className="text-[15px] leading-[22.5px]">Menu</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
