import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import ExportContextUser from "../contexts/UserContext";
import ExportContextProject from "../contexts/ProjectContext";
import NavigationForm from "../components/forms/NavigationForm";

import "../styles/NavbarForm.css";

import types from "../assets/pictures/types.png";
import descriptionform from "../assets/pictures/descriptionform.png";
import domaineform from "../assets/pictures/domaineform.png";
import keyDates from "../assets/pictures/keyDates.png";
import entreprise from "../assets/pictures/entreprise.png";
import apercuform from "../assets/pictures/apercuform.png";

import NewProjectOrganisationSchool from "../components/forms/SchoolForm/NewProjectOrganisationSchool";
import NewProjectDescriptionSchool from "../components/forms/SchoolForm/NewProjectDescriptionSchool";
import NewProjectDomainSchool from "../components/forms/SchoolForm/NewProjectDomainSchool";
import NewProjectDatesClésSchool from "../components/forms/SchoolForm/NewProjectDatesClésSchool";
import NewProjectProfileEcoleSchool from "../components/forms/SchoolForm/NewProjectProfileEcoleSchool";
import NewProjectTypeCompany from "../components/forms/CompanyForm/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/forms/CompanyForm/NewProjectDescriptionCompany";
import NewProjectDomainCompany from "../components/forms/CompanyForm/NewProjectDomainCompany";
import NewProjectConsultingCompany from "../components/forms/CompanyForm/NewProjectConsultingCompany";
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
  const { handleProject } = useContext(ExportContextProject.ProjectContext);

  const navData = steptypes.filter((el) => el.type === user.entity_category_id);

  window.onbeforeunload = () => {
    return "Are you sure you want to leave ?";
  };

  useEffect(() => {
    if (user.company_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`)
        .then((res) => handleProject(res.data))
        .catch((err) => console.warn(err));
    } else if (user.school_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/schools/${user.school_id}`)
        .then((res) => handleProject(res.data))
        .catch((err) => console.warn(err));
    }
  }, []);

  const handleNextStep = (step) => {
    if (step === "Return") setCurrentStep(currentStep - 1);
    setTimeout(() => {
      if (step === "Next") setCurrentStep(currentStep + 1);
    }, 200);
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
