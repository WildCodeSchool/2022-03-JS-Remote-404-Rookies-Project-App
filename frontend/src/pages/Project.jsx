import React from "react";
import SchoolProgressStep from "../components/SchoolProgressStep";
import CompanyProgressStep from "../components/CompanyProgressStep";
import Navbar from "../components/Navbar";

function Project() {
  return (
    <div className="flex ">
      <Navbar />
      <div className="flex-col  w-full ">
        <CompanyProgressStep CompanyProgressStep={CompanyProgressStep} />
        <SchoolProgressStep SchoolProgressStep={SchoolProgressStep} />
      </div>
    </div>
  );
}

export default Project;
