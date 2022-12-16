import React from "react";
// next import
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-5 py-4 flex items-center text-white gap-6">
        <Link href="/">
          <a className="font-semibold text-2xl">PENDEM ESTATES</a>
        </Link>
        <div className="ml-auto flex items-center gap-6">
          <Link href="/projects">
            <a className="">Projects</a>
          </Link>
          <Link href="/about">
            <a className="">About</a>
          </Link>
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
