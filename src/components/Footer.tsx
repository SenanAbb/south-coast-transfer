import Image from "next/image";
import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="bg-blue-50 flex flex-col gap-3 items-center py-10">
        <Image src={"/images/logo.webp"} alt="Logo" width={150} height={150} />
        <div className="flex gap-5">
          <Link href={"/about"} className="text-black-400">
            About us
          </Link>
          <Link href={"/fleet"} className="text-black-400">
            Cars
          </Link>
          <Link href={"/contact"} className="text-black-400">
            Contact
          </Link>
        </div>
        <div className="lg:flex gap-5 text-center">
          <p className="text-black-400">Phone: (+34) XXX-XX-XX-XX</p>
          <p className="text-black-400">Email: hello@southcoasttransfers.com</p>
        </div>
        <p className="text-black-400">
          Address: Calle de label, 23, California, México
        </p>
        <div className="flex gap-3">
          <Link href="/" className="text-black-400">
            <FaSquareFacebook size={35} />
          </Link>
          <Link href="/" className="text-black-400">
            <FaSquareTwitter size={35} />
          </Link>
          <Link href="/" className="text-black-400">
            <FaSquareInstagram size={35} />
          </Link>
        </div>
      </div>
      <div className="bg-black-400 text-center text-gray-300 py-5">
        Copyright@2024
      </div>
    </footer>
  );
}

export default Footer;
