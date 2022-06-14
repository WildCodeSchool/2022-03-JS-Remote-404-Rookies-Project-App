import React from "react";
import Logo from "./Logo";

function SidePanel() {
  return (
    <div className="flex flex-col justify-between items-start w-2/5 text-white bg-emerald-700 h-screen select-none">
      <Logo />
      <h2 className="text-4xl text-left m-12 font-bold">
        “The best way of learning about anything is{" "}
        <h2 className="text-yellow-300">by doing.”</h2>
        <h3 className="text-lg text-right font-semibold">Richard Branson</h3>
      </h2>
      <div className="font-semibold m-10">
        <a
          href="https://www.rookiesprojects.com/"
          className="px-6 hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accueil
        </a>
        <a
          href="https://www.rookiesprojects.com/contact-fr"
          className="px-6 hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default SidePanel;
