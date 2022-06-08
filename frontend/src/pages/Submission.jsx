import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationForm from "../components/forms/NavigationForm";

import "../styles/NavbarForm.css";

import types from "../assets/pictures/types.png";
import descriptionform from "../assets/pictures/descriptionform.png";
import domaineform from "../assets/pictures/domaineform.png";
import keyDates from "../assets/pictures/keyDates.png";
import entreprise from "../assets/pictures/entreprise.png";
import apercuform from "../assets/pictures/apercuform.png";
import rightarrowbutton from "../assets/pictures/rightarrowbutton.png";
import leftarrowbutton from "../assets/pictures/leftarrowbutton.png";
import NewProjectOrganisationSchool from "../components/forms/NewProjectOrganisationSchool";
import NewProjectDescriptionSchool from "../components/forms/NewProjectDescriptionSchool";
import NewProjectDomainSchool from "../components/forms/NewProjectDomainSchool";
import NewProjectDatesClésSchool from "../components/forms/NewProjectDatesClésSchool";
import NewProjectProfileEcoleSchool from "../components/forms/NewProjectProfileEcoleSchool";
import NewProjectTypeCompany from "../components/forms/NewProjectTypeCompany";
import NewProjectDescriptionCompany from "../components/forms/NewProjectDescriptionCompany";
import NewProjectDomainCompany from "../components/forms/NewProjectDomainCompany";
import NewProjectConsultingCompany from "../components/forms/NewProjectConsultingCompany";

const steptypes = [
  { label: "Organisation", image: types, type: "school" },
  { label: "Description", image: descriptionform, type: "school" },
  { label: "Domaine", image: domaineform, type: "school" },
  { label: "Dates clés", image: keyDates, type: "school" },
  { label: "Profil entreprise", image: entreprise, type: "school" },
  { label: "Aperçu", image: apercuform, type: "school" },

  { label: "Type", image: types, type: "company" },
  { label: "Description", image: descriptionform, type: "company" },
  { label: "Domaine", image: domaineform, type: "company" },
  { label: "Entreprise", image: keyDates, type: "company" },
  { label: "Aperçu", image: apercuform, type: "company" },
];

function Submission() {
  const { type } = useParams();
  const navData = steptypes.filter((el) => el.type === type);

  const [currentStep, setCurrentStep] = useState(0);

  const getForm = () => {
    const school = {
      Organisation: <NewProjectOrganisationSchool />,
      Description: <NewProjectDescriptionSchool />,
      Domaine: <NewProjectDomainSchool />,
      "Dates clés": <NewProjectDatesClésSchool />,
      "Profil entreprise": <NewProjectProfileEcoleSchool />,
    };

    const company = {
      Type: <NewProjectTypeCompany />,
      Description: <NewProjectDescriptionCompany />,
      Domaine: <NewProjectDomainCompany />,
      Entreprise: <NewProjectConsultingCompany />,
    };
    return type === "school"
      ? school[navData[currentStep].label]
      : company[navData[currentStep].label];
  };

  return (
    <div className="company-NavBar-form">
      <hr className="progressbar" />
      <NavigationForm navData={navData} currentStep={currentStep} />

      <div className="layout-wrapper">
        {getForm()}
        <div className="button-wrapper">
          {currentStep >= 1 && (
            <button
              type="button"
              className="back-btn"
              id="back-btn"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              <img src={leftarrowbutton} alt="vector" /> retour
            </button>
          )}
          {currentStep < navData.length - 1 && (
            <button
              type="button"
              className="primarybutton"
              id="primarybutton"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Suivant <img src={rightarrowbutton} alt="rightarrowbutton" />
            </button>
          )}

          {currentStep >= navData.length - 1 && (
            <button type="button" id="primarybutton" className="primarybutton">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Submission;
