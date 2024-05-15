import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logoSimpleship.png";
import fb from "../../assets/images/fb.svg";
import applepay from "../../assets/images/applepay.png";
import bitcoin from "../../assets/images/bitcoin.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import paypal from "../../assets/images/paypal.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-primaryBlue">
      <div className="containerc">
        <section className="flex justify-between 2xl:pt-[124px]">
          <div className="max-w-[275px]">
            <img className="2xl:mb-[60px]" src={logo} alt="Simpleship logo" />
            <p className="text-white leading-[26px] text-[14.5px]">
              Jednoduché zaslání a příjem zásilky po celém světě. Vše z pohodlí
              domova a bez zbytečné ztráty času chozením na pobočky dopravců.
            </p>
          </div>

          {/* INFORMACE */}
          <div className="max-w-[275px]">
            <h4 className="text-white font-bold text-lg 2xl:mb-[60px]">
              Informace
            </h4>
            <Link className="link-style">O společnosti</Link>
            <Link className="link-style">Nabídka služeb</Link>
            <Link className="link-style">Ceníky služeb</Link>
            <Link className="link-style">Oblíbené destinace</Link>
            <Link className="link-style">Často se ptáte</Link>
          </div>

          {/* ZAJÍMÁ VÁS */}
          <div className="max-w-[275px]">
            <h4 className="text-white font-bold text-lg 2xl:mb-[60px]">
              Zajímá Vás
            </h4>
            <Link className="link-style">Zabalení zásilky</Link>
            <Link className="link-style">Délka přepravy</Link>
            <Link className="link-style">Reklamace</Link>
            <Link className="link-style">Proclení zboží</Link>
            <Link className="link-style">Dobírka</Link>
          </div>

          {/* RYCHLÝ KONTAKT */}
          <div className="max-w-[275px]">
            <h4 className="text-white font-bold text-lg 2xl:mb-[60px]">
              Rychlý kontakt
            </h4>
            <a href="tel:+420777563002" className="link-style">
              +420 777 563 002
            </a>
            <a href="mailto:petrzatloukal@icloud.com" className="link-style">
              petrzatloukal@icloud.com
            </a>
            <p className="text-lightBlue leading-[36px] text-[14.5px]">
              Po - Pá: 8:00 - 17:00
            </p>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/simpleshipcz"
              >
                <img
                  className="2xl:mb-[40px] 2xl:mt-[20px]"
                  src={fb}
                  alt="Facebook logo"
                />
              </a>
            </div>
            <Link className="text-white leading-[36px] text-[14.5px] underline underline-offset-[3px] hover:no-underline">
              Všechny kontakty
            </Link>
          </div>
        </section>

        {/* FOOTER OBRÁZKY - PLATBY */}
        <section className="flex 2xl:gap-[10.75px] 2xl:mt-[50px] 2xl:mb-[100px]">
          <img src={applepay} alt="Apple pay logo" />
          <img src={bitcoin} alt="Bitcoin logo" />
          <img src={visa} alt="Visa logo" />
          <img src={mastercard} alt="MasterCard logo" />
          <img src={paypal} alt="PayPal logo" />
        </section>

        {/* COPYRIGHT */}
        <section className="flex items-center 2xl:pb-[86px] 2xl:gap-[192px]">
          <h4 className="text-white font-bold text-[14.5px]">
            &copy; {currentYear} Simpleship Logistics s.r.o.
          </h4>
          <div className="flex gap-8">
            <Link className="link-style-white">Obchodní podmínky</Link>
            <Link className="link-style-white">Ochrana osobních údajů</Link>
            <Link className="link-style-white">Cookies</Link>
            <Link className="link-style-white">Reklamační řád</Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
