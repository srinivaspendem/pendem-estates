import React from "react";
// next import
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto flex">
      <div>Navbar</div>
    </div>
  );
};

export default Navbar;
