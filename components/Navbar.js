"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import Body2 from "./Hero/Body2";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#advisory_board", label: "Advisory Board" },
    { href: "#teams", label: "Our Team" },
    { href: "/Gallery", label: "Blog" },
    { href: "#foot", label: "Contact" },
  ];

  return (
    <div
      className={`sm:mb-12 mb-7  bg-white backdrop-blur-3xl bg-opacity-40 fixed w-full shadow-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ICON BELOW */}
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className='flex flex-row items-center'>
              {/* <RiNextjsFill className="text-6xl text-gray-800" /> */}
              <Image src="/Logo.png" alt="logo" width={40} height={40} className="mr-2"/>
              <p className='border-2 p-1 md:text-2xl text-lg text-black'>Perovskite Innovation</p>
            </Link>
          </div> 
          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-900 text-xl  hover:transition-all duration-300 border-black hover:border-b-4 px-3 flex items-center text-md transition-colors ${
                  pathname === link.href ? "text-blue-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile MEnu button */}

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md text-black hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-inset focus:ring-green-300"
            >
              {!isMobileMenuOpen ? (
                <BiMenu className="text-5xl " />
              ) : (
                <BiX className="text-5xl" />
              )}
            </button>

            {/* mobile menu */}
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-lg font-medium ${
                  pathname === link.href
                    ? "text-black bg-blue-200"
                    : "text-black hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
