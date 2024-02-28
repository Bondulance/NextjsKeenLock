import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

      <div className="items-center gap-12 flex mr-5">
        <Link
          href="/projects"
          className="text-blue-300 font-semibold max-sm:hidden"
        >
          <p className=" hover:text-green-100">Projects</p>
        </Link>

        <Link
          href="/question"
          className="text-blue-100 font-semibold max-sm:hidden bg-blue-300 px-2 py-0.5 rounded-md flex items-center justify-center"
        >
          <p className="h2-bold hover:text-green-100">+</p>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              width={50}
              height={50}
              className="sm:hidden cursor-pointer"
              alt="hamburger"
              src="/icons/hamburger.svg"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/question">Add a Project</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Projects</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
