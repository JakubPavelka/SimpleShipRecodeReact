import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logoSimpleship.png";
import fb from "../../assets/images/fb.svg";
import applepay from "../../assets/images/applepay.png";
// import bitcoin from "../../assets/images/bitcoin.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import paypal from "../../assets/images/paypal.png";

import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { t } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-primaryBlue mt-[110px]">
      <div className="containerc">
        <section className="flex justify-between pt-[60px] md:pt-[124px] footer-text">
          <div className="max-w-[275px] logontext mr-[10px]">
            <img
              className="mb-[20px] md:mb-[60px]"
              src={logo}
              alt="Simpleship logo"
            />
            <p className="text-white leading-[26px] text-[14.5px]">
              {t("FooterCol1")}
            </p>
          </div>

          {/* INFORMACE */}
          <div className="max-w-[275px] info mr-[10px]">
            <h4 className="text-white font-bold text-lg mb-[20px] tablet:mb-[60px]">
              {t("FooterInfo")}
            </h4>
            <Link className="link-style">{t("AboutUs")}</Link>
            <Link className="link-style">{t("ShipTerms")}</Link>
            <Link className="link-style">{t("ShopTermsCarriers")}</Link>
          </div>

          {/* ZAJÍMÁ VÁS */}
          <div className="max-w-[275px] zajima mr-[10px]">
            <h4 className="text-white font-bold text-lg mb-[20px] tablet:mb-[60px]">
              {t("FooterInterest")}
            </h4>
            <Link className="link-style">{t("WrapPackage")}</Link>
            <Link className="link-style">{t("InsidePackage")}</Link>
            <Link className="link-style">{t("Glossary")}</Link>
            <Link className="link-style">{t("MeasuringAndWeight")}</Link>
          </div>

          {/* RYCHLÝ KONTAKT */}
          <div className="max-w-[275px] rychkontakt mr-[10px]">
            <h4 className="text-white font-bold text-lg mb-[20px] tablet:mb-[60px]">
              {t("FooterFastContact")}
            </h4>
            <a href="tel:+420777563002" className="link-style">
              +420 777 563 002
            </a>
            <a href="mailto:petrzatloukal@icloud.com" className="link-style">
              petrzatloukal@icloud.com
            </a>
            <p className="text-lightBlue leading-[36px] text-[14.5px]">
              {t("TimeOpened")}
            </p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/simpleshipcz"
              >
                <img
                  className="fb-logo mb-[20px] sm:mb-[40px] mt-[10px] sm:mt-[20px] transition"
                  src={fb}
                  alt="Facebook logo"
                />
              </a>
            </div>
            <Link className="text-white leading-[36px] text-[14.5px] underline underline-offset-[3px] hover:no-underline">
              {t("AllContacts")}
            </Link>
          </div>
        </section>

        {/* FOOTER OBRÁZKY - PLATBY */}
        <section className="payments flex-wrap flex justify-start gap-[10.75px] mt-[50px] mb-[44px] md:mb-[100px]">
          <img src={applepay} alt="Apple pay logo" />
          {/* <img src={bitcoin} alt="Bitcoin logo" /> */}
          <img src={visa} alt="Visa logo" />
          <img src={mastercard} alt="MasterCard logo" />
          <img src={paypal} alt="PayPal logo" />
        </section>

        {/* COPYRIGHT */}
        <section className="flex sm:items-start items-center flex-col-reverse lg:flex-row pb-[60px] md:pb-[86px] gap-[30px] lg:gap-[80px] xl:gap-[192px]">
          <h4 className="text-white font-bold text-[14.5px]">
            &copy; {currentYear} Simpleship Logistics s.r.o.
          </h4>
          <div className="flex gap-3 lg:gap-8 flex-wrap">
            <Link className="link-style-white">
              {t("Terms and Conditions")}
            </Link>
            <Link className="link-style-white">{t("Privacy & Policy")}</Link>
            <Link className="link-style-white">{t("Return Policy")}</Link>
            <Link className="link-style-white">{t("Cookie Settings")}</Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
