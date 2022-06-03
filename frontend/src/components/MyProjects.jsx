import React from "react";

import plusLogo from "../assets/add.png";

import DashboardButton from "./DashboardButton";

function MyProjects() {
  return (
    <div className="flex flex-col mx-10 my-5 h-full rounded-2xl shadow-md border">
      <div className="flex justify-between">
        <h2 className="text-emerald-700 m-5">Mes projets</h2>
        <DashboardButton
          action={{ logo: plusLogo, text: "Ajouter", link: "/submission" }}
        />
      </div>
    </div>
  );
}

export default MyProjects;
