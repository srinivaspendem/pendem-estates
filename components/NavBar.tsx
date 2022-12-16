import React from "react";
// next import
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-primary border-b border-gray-600">
      <div className="container mx-auto px-5 py-4 flex items-center text-white gap-6">
        <Link href="/">
          <a className="flex items-end">
            <img src="/logos/pendem-white.svg" className="h-10 w-full" alt="" />
            <div className="font-semibold text-[20px] sm:text-2xl whitespace-nowrap">
              PENDEM ESTATES
            </div>
          </a>
        </Link>
        <div className="ml-auto flex items-center gap-3 md:gap-6">
          {/* <Link href="/projects">
            <a className="">Projects</a>
          </Link>
          <Link href="/about">
            <a className="">About</a>
          </Link> */}
          {/* <Link href="/contact">
            <a className="border border-white px-3 py-1 rounded text-lg">
              Contact Us
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
