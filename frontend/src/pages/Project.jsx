import Navbar from "@components/Navbar";
import React from "react";

import User from "@components/User";
import ProjectDetails from "@components/ProjectDetails";

function Project() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex justify-between m-10 items-center text-gray-500">
          <p>Entreprise / Mes Projets / Étude de marché</p>
          <User />
        </div>
        <ProjectDetails />
      </div>
    </div>
  );
}

export default Project;
