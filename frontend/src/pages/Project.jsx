import React from "react";

import UserSettings from "@components/Dashboard/UserSettings";
import ProjectDetails from "@components/Dashboard/ProjectDetails";
import Navbar from "@components/Navbar"

function Project() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex justify-between m-10 items-center text-gray-500">
          <p>Entreprise / Mes Projets / Étude de marché</p>
          <UserSettings />
        </div>
        <ProjectDetails />
      </div>
    </div>
  );
}

export default Project;