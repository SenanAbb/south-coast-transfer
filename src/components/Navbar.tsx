"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const links: Link[] = [
  { href: "/", title: "Home" },
  { href: "/fleet", title: "Our fleet" },
  { href: "/contact", title: "Contact" },
  { href: "/about", title: "About Us" },
];

function Navbar() {
  const router = useRouter();

  return (
    <header className="absolute top-0 w-full h-[90px] sm:h-[100px] bg-white drop-shadow-lg flex justify-center">
      <nav className="w-[1200px] mx-10 flex items-center justify-between">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={90}
          height={90}
          priority
          onClick={() => router.push("/")}
        />
        <div className="hidden lg:flex lg:gap-10">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNavbar links={links} />
      </nav>
    </header>
  );
}

export default Navbar;
