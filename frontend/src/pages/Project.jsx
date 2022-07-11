import React from "react";

import plusLogo from "../assets/pictures/add.png";

import "../styles/Project.css";

import UserSettings from "../components/Dashboard/UserSettings";
import DashboardButton from "../components/Dashboard/DashboardButton";
import ProjectSelection from "../components/Dashboard/ProjectSelection";

function Project() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col">
        <div className="flex justify-between m-10 items-center text-gray-500">
          <p>Entreprise / Mes Projets / Étude de marché</p>
          <UserSettings />
        </div>
        <ProjectSelection />
        <DashboardButton
          action={{ logo: plusLogo, text: "Ajouter", link: "/submission" }}
        />
      </div>
    </div>
  );
}

export default Project;
