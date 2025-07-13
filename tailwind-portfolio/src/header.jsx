import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';




const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

return (
    <>
  <header
    className={`sticky top-0 z-50 px-4 lg:px-8 max-w-4xl mx-auto my-5 rounded-full transition-colors duration-300 backdrop-blur-md ${ 
        isScrolled ? "text-white bg-[#1f2b38]/90" : "bg-gray-400/10"}`}
  >
    <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-[5px]">
      {/* Logo */}
      <div className={`text-3xl lg:text-5xl font-bold cursor-pointer ${isScrolled ? "text-white" : "text-[#07285b]"}`}>
        <Link to="intro" spy={true} smooth={true} offset={-150} duration={500}>
            ℳdev
        </Link>
        </div>


      {/* Desktop Nav (hidden on md and below) */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-5 lg:space-x-8 text-sm lg:text-lg font-medium">
          <li className="hover:text-gray-400 transition cursor-pointer">
            <Link to="portfolio" spy={true} smooth={true} offset={-5} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="hover:text-gray-400 border border-indigo-700 py-2 px-4 rounded-full transition cursor-pointer">
            <Link to="about" spy={true} smooth={true} offset={-43} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-gray-400 transition cursor-pointer">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={`md:hidden p-2 rounded-full  hover:bg-gray-700 transition-colors ${isScrolled ? "text-white" : "text-[#07285b]"}`}
      >
        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </div>
  </header>

  {/* Mobile Menu */}
  {isMobileNavOpen && (
    <div className="md:hidden fixed top-[84px] left-1/2 -translate-x-1/2 w-[90%] z-40 bg-[#181823]/90 backdrop-blur-md rounded-xl p-4 text-white space-y-4 shadow-xl">
      <ul className="space-y-3 text-sm lg:text-lg font-medium text-center">
        <li className="hover:text-gray-300 transition cursor-pointer">
          <Link to="intro" spy={true} smooth={true} offset={-150} duration={500}>
            Home
            </Link>
        </li>
        <li className="hover:text-gray-300 border border-indigo-700 py-2 px-4 rounded-full transition cursor-pointer">
          <Link to="portfolio" spy={true} smooth={true} offset={-5} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="hover:text-gray-300 transition cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={-43} duration={500}>
            About
          </Link>
        </li>
      </ul>

      <button className="w-full bg-white text-black py-2 rounded-full mt-2 hover:bg-gray-200">
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact Me
          </Link>
      </button>
    </div>
  )}
</>

  );
};

export default Header;