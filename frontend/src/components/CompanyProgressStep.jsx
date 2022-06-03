import React, { useState } from "react";
import CompanyStepNavigationForm from "./CompanyStepNavigationForm";
import NewProjectTypeCompany from "./NewProjectTypeCompany";
import NewProjectConsultingCompany from "./NewProjectConsultingCompany";
import NewProjectDescriptionCompany from "./NewProjectDescriptionCompany";
import NewProjectDomainCompany from "./NewProjectDomainCompany";

import "../styles/NavbarForm.css";

import apercu from "../assets/Apercu.png";
import description from "../assets/Description.png";
import domaine from "../assets/Domaine.png";
import entreprise from "../assets/Entreprise.png";
import types from "../assets/types.png";
import vector from "../assets/Vector.png";
import vectorG from "../assets/VectorG.png";

function CompanyProgressStep() {
  const labelArray = ["Type", "Description", "Domaine", "Entreprise", "Aperçu"];

  const labelImages = [types, description, domaine, entreprise, apercu];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="company-NavBar-form">
      <hr className="progressbar" />
      <CompanyStepNavigationForm
        labelArray={labelArray}
        labelImages={labelImages}
        currentStep={currentStep}
      />

      <div className="layout-wrapper">
        {currentStep === 1 && (
          <div className="form-wrapper">
            <NewProjectTypeCompany />
          </div>
        )}
        {currentStep === 2 && (
          <div className="form-wrapper">
            <NewProjectDescriptionCompany />
          </div>
        )}
        {currentStep === 3 && (
          <div className="form-wrapper">
            <NewProjectDomainCompany />
          </div>
        )}
        {currentStep === 4 && (
          <div className="form-wrapper">
            <NewProjectConsultingCompany />
          </div>
        )}
        {currentStep === 5 && <div className="form-wrapper">formulaire 5</div>}

        <div className="button-wrapper">
          {currentStep > 1 && (
            <button
              type="button"
              className="back-btn"
              id="back-btn"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              <img src={vectorG} alt="vector" /> retour
            </button>
          )}
          {currentStep < 5 && (
            <button
              type="button"
              className="primarybutton"
              id="primarybutton"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Suivant <img src={vector} alt="vector" />
            </button>
          )}
          {currentStep === 5 && (
            <button type="button" id="primarybutton" className="primarybutton">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyProgressStep;
