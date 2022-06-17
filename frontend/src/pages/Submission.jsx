import React, { useContext, useState } from "react";

import ExportContextUser from "../contexts/UserContext";
import NavigationForm from "../components/forms/NavigationForm";

import "../styles/NavbarForm.css";

import types from "../assets/pictures/types.png";
import descriptionform from "../assets/pictures/descriptionform.png";
import domaineform from "../assets/pictures/domaineform.png";
import keyDates from "../assets/pictures/keyDates.png";
import entreprise from "../assets/pictures/entreprise.png";
import apercuform from "../assets/pictures/apercuform.png";

import NewProjectOrganisationSchool from "../components/forms/NewProjectOrganisationSchool";
import NewProjectDescriptionSchool from "../components/forms/NewProjectDescriptionSchool";
import NewProjectDomainSchool from "../components/forms/NewProjectDomainSchool";
import NewProjectDatesClésSchool from "../components/forms/NewProjectDatesClésSchool";
import NewProjectProfileEcoleSchool from "../components/forms/NewProjectProfileEcoleSchool";
import NewProjectTypeCompany from "../components/forms/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/forms/NewProjectDescriptionCompany";
import NewProjectDomainCompany from "../components/forms/NewProjectDomainCompany";
import NewProjectConsultingCompany from "../components/forms/NewProjectConsultingCompany";
import NewProjectPreview from "../components/forms/NewProjectPreview";

const steptypes = [
  { label: "Organisation", image: types, type: 2 },
  { label: "Description", image: descriptionform, type: 2 },
  { label: "Domaine", image: domaineform, type: 2 },
  { label: "Dates clés", image: keyDates, type: 2 },
  { label: "Profil entreprise", image: entreprise, type: 2 },
  { label: "Aperçu", image: apercuform, type: 2 },

  { label: "Type", image: types, type: 1 },
  { label: "Description", image: descriptionform, type: 1 },
  { label: "Domaine", image: domaineform, type: 1 },
  { label: "Entreprise", image: keyDates, type: 1 },
  { label: "Aperçu", image: apercuform, type: 1 },
];

function Submission() {
  const [currentStep, setCurrentStep] = useState(0);

  const { user } = useContext(ExportContextUser.UserContext);

  const navData = steptypes.filter((el) => el.type === user.entity_category_id);

  const handleNextStep = (step) => {
    if (step === "Return") setCurrentStep(currentStep - 1);
    setTimeout(() => {
      if (step === "Next") setCurrentStep(currentStep + 1);
    }, 500);
  };

  const getForm = () => {
    const school = {
      Organisation: (
        <NewProjectOrganisationSchool
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Description: (
        <NewProjectDescriptionSchool
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Domaine: (
        <NewProjectDomainSchool
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      "Dates clés": (
        <NewProjectDatesClésSchool
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      "Profil entreprise": (
        <NewProjectProfileEcoleSchool
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Aperçu: (
        <NewProjectPreview
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
    };

    const company = {
      Type: (
        <NewProjectTypeCompany
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Description: (
        <NewProjectDescriptionCompany
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Domaine: (
        <NewProjectDomainCompany
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Entreprise: (
        <NewProjectConsultingCompany
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
      Aperçu: (
        <NewProjectPreview
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          long={navData.length}
        />
      ),
    };
    return user.entity_category_id === 2
      ? school[navData[currentStep].label]
      : company[navData[currentStep].label];
  };

  return (
    <div className="company-NavBar-form">
      <hr className="progressbar" />
      <NavigationForm navData={navData} currentStep={currentStep} />

      <div className="layout-wrapper">{getForm()}</div>
    </div>
  );
}

export default Submission;
