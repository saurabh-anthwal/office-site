"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for the hamburger menu
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareVimeo } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menu = [
    { id: 1, title: 'Home +', url: '/' },
    { id: 2, title: 'Pages +', url: '/pages' },
    { id: 3, title: 'Service +', url: '/services' },
    { id: 4, title: 'Project +', url: '/projects' },
    { id: 5, title: 'Blog +', url: '/blog' },
    { id: 6, title: 'Contact +', url: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-[100] ${isMenuOpen ? "bg-[#010915] text-white" : "bg-white text-black"} shadow-md`}>
      <nav className="w-full md:w-[85%] mx-auto flex justify-between items-center py-5">
        {/* Logo */}
        <Image
          width={150}
          height={150}
          src="https://dataclaps.com/wp-content/uploads/2020/09/Screenshot-2023-03-18-at-2.36.25-AM.png"
          alt="Zimis Logo"
          className="logo transition-all duration-300"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {menu.map((el) => (
            <li key={el.id}>
              <Link className="text-md font-extralight text-gray-700" href={el.url}>{el.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Call to Action Button */}
        <button className="hidden md:block main-button">Get Started</button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={`md:hidden ${isMenuOpen ? "bg-[#010915] text-white" : "bg-white text-black"} shadow-md h-screen overflow-scroll px-5 pb-40 space-y-6`}>
          {menu.map((el) => (
            <li key={el.id}>
              <Link className="flex justify-between items-center" href={el.url} onClick={toggleMenu}>
                {el.title}
                <span>👉</span>
              </Link>
            </li>
          ))}
          <li>
            <h5 className='mt-10 text-2xl font-bold'>Subscribe & Follow</h5>
          </li>
          <li>
            <p>The scallops were perfectly cooked, tender, and flavorful, paired beautifully with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the chef's attention to detail.</p>
          </li>
          <li className='flex items-center gap-2 text-3xl'>
            <FaFacebookSquare/>
            <FaLinkedin/>
            <FaPinterest/>
            <FaSquareVimeo/>
          </li>
          <li>
            <button className="main-button w-full">Get Started</button>
          </li>
          <li>
            <button className="main-button w-full">Purchase Now</button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
