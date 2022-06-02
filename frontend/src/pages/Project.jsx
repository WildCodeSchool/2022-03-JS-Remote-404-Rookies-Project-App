import React from "react";
import Navbar from "../components/Navbar";
import NewProjectTypeCompany from "../components/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/NewProjectDescriptionCompany";
import NewProjectDomainCompany from "../components/NewProjectDomainCompany";
import NewProjectConsultingCompany from "../components/NewProjectConsultingCompany";

function Project() {
  return (
    <div className="flex">
      <Navbar />
      <NewProjectTypeCompany />
      <NewProjectDescriptionCompany />
      <NewProjectDomainCompany />
      <NewProjectConsultingCompany />
    </div>
  );
}

export default Project;
