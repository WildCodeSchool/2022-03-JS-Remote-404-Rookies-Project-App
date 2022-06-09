import React from "react";

import UserSettings from "@components/UserSettings";
import ProjectDetails from "@components/ProjectDetails";

function Project() {
  return (
    <div className="flex">
      <Navbar />
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