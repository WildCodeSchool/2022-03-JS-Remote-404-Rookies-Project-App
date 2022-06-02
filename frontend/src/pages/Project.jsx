import React from "react";
import Navbar from "../components/Navbar";
// import NewProjectOrganisationSchool from "../components/NewProjectOrganisationSchool";
// import NewProjectDescriptionSchool from "../components/NewProjectDescriptionSchool";
// import NewProjectDomainSchool from "../components/NewProjectDomainSchool";
// import NewProjectDatesClésSchool from "../components/NewProjectDatesClésSchool";
import NewProjectProfileEcoleSchool from "../components/NewProjectProfileEcoleSchool";

function Project() {
  return (
    <div className="flex">
      <Navbar />
      {/* <NewProjectOrganisationSchool /> */}
      {/* <NewProjectDescriptionSchool /> */}
      {/* <NewProjectDomainSchool /> */}
      {/* <NewProjectDatesClésSchool /> */}
      <NewProjectProfileEcoleSchool />
    </div>
  );
}
export default Project;
