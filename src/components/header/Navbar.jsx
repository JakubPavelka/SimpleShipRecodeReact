import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logoSimpleship.png";
import arrowDownWhite from "../../assets/images/arrowDownWhite.svg";
import cart from "../../assets/images/cart.png";
import czflag from "../../assets/images/czechFlag.svg";
import user from "../../assets/images/user.svg";
const Navbar = () => {
  return (
    <>
      <div className="containerc">
        <nav className="flex justify-between pt-[30px] text-white">
          <div>
            <NavLink to="/">
              <img src={logo} alt="Simpleship logo" />
            </NavLink>
          </div>

          <div className="flex items-center gap-x-9">
            <NavLink className="flex gap-x-[10px]" to="/services">
              Služby <img src={arrowDownWhite} alt="Šipka dolů" />
            </NavLink>
            <NavLink to="/pricing">Ceník</NavLink>
            <NavLink to="#faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
          </div>

          <div className="flex items-center  gap-x-6">
            <NavLink to="/cart">
              <img src={cart} alt="Košík" />
            </NavLink>
            <p className="flex items-center gap-x-[10px]">
              CZK
              <span>
                <img src={arrowDownWhite} alt="Šipka dolů" />
              </span>
            </p>
            <div className="flex gap-x-[10px]">
              <img src={czflag} alt="Česká vlajka" />
              <img src={arrowDownWhite} alt="Šipka dolů" />
            </div>
            <div className="flex gap-x-[10px]">
              <img src={user} alt="Ikonka účtu" />
              <p>Účet</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
