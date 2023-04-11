import React from "react";
import { GiRunningNinja as Logo } from "react-icons/gi";

function Header() {
  return (
    <div>
      <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <div className="flex  items-center space-x-3 text-white">
          <Logo size={50} color="white" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
