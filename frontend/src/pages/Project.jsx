import React from "react";

import Navbar from "../components/Navbar";

import NewProjectTypeCompany from "../components/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/NewProjectDescriptionCompany";
import NewProjectDomainCompany from "../components/NewProjectDomainCompany";
import NewProjectConsultingCompany from "../components/NewProjectConsultingCompany";
import SchoolProgressStep from "../components/SchoolProgressStep";
import CompanyProgressStep from "../components/CompanyProgressStep";


// import NewProjectOrganisationSchool from "../components/NewProjectOrganisationSchool";
// import NewProjectDescriptionSchool from "../components/NewProjectDescriptionSchool";
// import NewProjectDomainSchool from "../components/NewProjectDomainSchool";
// import NewProjectDatesClésSchool from "../components/NewProjectDatesClésSchool";
// import NewProjectProfileEcoleSchool from "../components/NewProjectProfileEcoleSchool";

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
	{/*<NewProjectOrganisationSchool /> */}
      {/* <NewProjectDescriptionSchool /> */}
      {/* <NewProjectDomainSchool /> */}
      {/* <NewProjectDatesClésSchool /> */}
      {/*<NewProjectProfileEcoleSchool />*/}


    </div>
  );
}

export default Project;