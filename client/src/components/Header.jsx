import React from "react";
import pinlyLogo from "../assets/images/atom.png";

function Header() {
  return (
    <div className="bg-yellow-500 h-24 w-full flex justify-between items-center px-3">
      <div className="text-gray-800 w-18 h-18 flex justify-between items-center">
        <img src={pinlyLogo} className="w-12 h-12" alt="" />
        <h1 className="ml-4 font-bold text-2xl">Pinly</h1>
      </div>
      <div className="text-gray-800">
        <p className="text-lg">🖤</p>
      </div>
    </div>
  );
}

export default Header;
