import React from "react";

import Navbar from "../components/Navbar";
import NewProjectTypeCompany from "../components/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/NewProjectDescriptionCompany";
import NewProjectDomainCompany from "../components/NewProjectDomainCompany";
import NewProjectConsultingCompany from "../components/NewProjectConsultingCompany";
import SchoolProgressStep from "../components/SchoolProgressStep";
import CompanyProgressStep from "../components/CompanyProgressStep";

function Project() {
  return (
    <div className="flex">
      <Navbar />
    <div className="flex-col  w-full ">
        <CompanyProgressStep CompanyProgressStep={CompanyProgressStep} />
        <SchoolProgressStep SchoolProgressStep={SchoolProgressStep} />
      </div>
      <NewProjectTypeCompany />
      <NewProjectDescriptionCompany />
      <NewProjectDomainCompany />
      <NewProjectConsultingCompany />
    </div>
  );
}
export default Project;
