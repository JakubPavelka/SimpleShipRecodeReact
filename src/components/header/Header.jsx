import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-primaryBlue relative h-[630px] 2xl:mb-[-460px]">
      <Navbar />
      <div className="containerc">
        <p className="text-[25px] leading-[37px] text-white 2xl:mt-[64px]">
          Jednoduše propojujeme{" "}
          <span className='relative z-[4] after:content-[""] after:absolute after:w-full after:h-[10px] after:rounded-[2px] after:bg-[#313a90] after:bottom-[5px] after:left-0 after:z-[-1]'>
            svět
          </span>
          .
        </p>
      </div>
    </header>
  );
};

export default Header;
