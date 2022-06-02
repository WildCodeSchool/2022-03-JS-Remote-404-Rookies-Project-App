import React from "react";
import Navbar from "../components/Navbar";
import NewProjectTypeCompany from "../components/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/NewProjectDescriptionCompany";

function Project() {
  return (
    <div className="flex">
      <Navbar />
      <NewProjectTypeCompany />
      <NewProjectDescriptionCompany />
    </div>
  );
}

export default Project;
