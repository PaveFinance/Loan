import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 border  z-50 backdrop-blur-md">
      <div className="flex justify-between mx-auto max-w-7xl p-4">
        <Link
          href="/"
          className="lg:text-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold"
        >
          Pave Finance
        </Link>
        <Link href="#about" className="font-bold ">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
