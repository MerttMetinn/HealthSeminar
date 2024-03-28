import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaHeartPulse } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 768;

  return (
    <div className="bg-[#0f172a] text-gray-300 font-sans leading-normal tracking-normal">
      <header className="shadow-md w-full md:px-6 py-4 px-7">
        <div className="flex justify-between items-center">
          <section className="flex items-center gap-2">
            <Link to="/home" className="flex items-center">
              <FaHeartPulse className="h-8 w-8 text-red-600" />
              <span className="font-bold ml-2">ProHealthSeminar</span>
            </Link>
          </section>
          {isSmallScreen ? (
            <section className="md:hidden">
              {isMenuOpen ? (
                <IoMdClose
                  className="h-7 w-7 text-red-600 cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <IoMenu
                  className="h-7 w-7 text-gray-300 cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </section>
          ) : (
            <nav className="md:flex gap-4 items-center">
              <NavLink
                to="/home"
                className="text-gray-400 hover:underline"
                activeClassName="font-bold"
              >
                Anasayfa
              </NavLink>
              <NavLink
                to="/add-seminar"
                className="text-gray-400 hover:underline"
                activeClassName="font-bold"
              >
                Seminer Ekle
              </NavLink>
            </nav>
          )}
        </div>
        {isSmallScreen && isMenuOpen && (
          <nav className="md:hidden flex flex-col mt-4">
            <NavLink
              to="/home"
              className="m-2 text-gray-300"
              activeClassName="font-bold"
            >
              Anasayfa
            </NavLink>
            <NavLink
              to="/add-seminar"
              className="m-2 text-gray-300"
              activeClassName="font-bold"
            >
              Seminer Ekle
            </NavLink>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;