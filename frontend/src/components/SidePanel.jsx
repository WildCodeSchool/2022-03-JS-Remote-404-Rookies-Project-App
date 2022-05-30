import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function SidePanel() {
  return (
    <div className="flex flex-col justify-between items-start w-2/5 text-white bg-emerald-700 h-screen">
      <Logo />
      <h1 className="text-4xl text-left m-12 font-bold">
        “The best way of learning about anything is by doing.”
        <br />
        <br /> Richard Branson
      </h1>
      <div className="font-semibold m-10">
        <Link to="/" className="px-6">
          Acceuil
        </Link>
        <Link to="/" className="px-6">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default SidePanel;
