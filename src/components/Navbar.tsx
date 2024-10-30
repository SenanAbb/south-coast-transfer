"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "/", title: "Home" },
  { href: "/fleet", title: "Our fleet" },
  { href: "/contact", title: "Contact" },
  { href: "/about", title: "About Us" },
];

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full h-[70px] sm:h-[100px] bg-white drop-shadow-lg flex justify-center">
      <nav className="w-[1200px] mx-10 flex items-center justify-between">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={90}
          height={90}
          priority
          className="hidden md:block z-20"
          onClick={() => router.push("/")}
        />
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={75}
          height={75}
          priority
          className="z-20 md:hidden"
          onClick={() => router.push("/")}
        />
        <div className="hidden lg:flex lg:gap-10">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-3xl text-black-900">
            {!isOpen && <FaBars />}
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-[360px] bg-white p-4 drop-shadow-2xl z-50 ${
          isOpen ? "translate-x-0" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center mb-4 pl-3">
          <div className="flex gap-6 items-center">
            <p onClick={() => alert("Español")}>ES</p>
            <p onClick={() => alert("English")}>EN</p>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-3xl cursor-pointer text-black-900 w-full flex flex-1 justify-end"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link href={link.href} onClick={toggleSidebar}>
                {link.title}
              </Link>
              <div className="w-52 bg-black-200 my-5 h-[1px] opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
