import Image from "next/image";
import Link from "next/link";

import logo from "../public/edk_logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <Link href="/">
        <Image src={logo} alt="EDK logo" />
        <span className="bg-white text-black text-2xl font-sans ml-16 p-1">Tarnów</span>
      </Link>
      {/* <Link href="/" className="text-2xl font-sans">
        Trasy
      </Link> */}
    </header>
  );
}
