import React from "react";
import pinlyLogo from "../assets/images/atom.png";

function Footer() {
  return (
    <div className="h-24 w-full border-t-2 border-gray-300 px-3 flex justify-center items-center">
      <p className="text-gray-800 font-bold">
        {" "}
        Made with 🖤 By{" "}
        <a
          href="https://ritvyk.netlify.app"
          className="font-bold text-lg text-decoration-none"
        >
          Ritvik
        </a>
      </p>
    </div>
  );
}

export default Footer;
