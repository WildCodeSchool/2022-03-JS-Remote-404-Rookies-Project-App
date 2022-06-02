import React, { useState } from "react";
import SchoolNavigationForm from "./SchoolNavigationForm";

import "../styles/NavbarForm.css";

import types from "../assets/types.png";
import description from "../assets/description.png";
import domaine from "../assets/domaine.png";
import keyDates from "../assets/keyDates.png";
import entreprise from "../assets/entreprise.png";
import apercu from "../assets/apercu.png";

import vector from "../assets/vector.png";
import vectorG from "../assets/vectorG.png";

function SchoolProgressStep() {
  const labelArray = [
    "Organisation",
    "Description",
    "Domaine",
    "Dates clés",
    "Profil entreprise",
    "Aperçu",
  ];

  const labelImages = [
    types,
    description,
    domaine,
    keyDates,
    entreprise,
    apercu,
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="company-NavBar-form">
      <hr className="progressbar" />
      <SchoolNavigationForm
        labelArray={labelArray}
        labelImages={labelImages}
        currentStep={currentStep}
      />

      <div className="layout-wrapper">
        {currentStep === 1 && <div className="form-wrapper">formulaire 1</div>}
        {currentStep === 2 && <div className="form-wrapper">formulaire 2</div>}
        {currentStep === 3 && <div className="form-wrapper">formulaire 3</div>}
        {currentStep === 4 && <div className="form-wrapper">formulaire 4</div>}
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
          {currentStep < 6 && (
            <button
              type="button"
              className="primarybutton"
              id="primarybutton"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Suivant <img src={vector} alt="vector" />
            </button>
          )}
          {currentStep === 6 && (
            <button type="button" id="primarybutton" className="primarybutton">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SchoolProgressStep;
