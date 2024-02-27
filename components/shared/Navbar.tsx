import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="bg-blue-100 justify-between
  h-15 w-full flex flex-row p-4 max-md:p-2 shadow-xl"
    >
      <Link href="/" className="cursor-pointer flex items-center">
        <Image alt="lock" width={30} height={30} src="/icons/lock.svg" />

        <p className="ml-1 text-[20px] lg:text-[25px] font-bold text-blue-300">
          Keen
          <span className="text-blue-400">Lock</span>
        </p>
      </Link>

      <div className="items-end gap-5 flex items-center mr-5">
        <Link href="/">Ask a Question</Link>
        <Link href="/">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
