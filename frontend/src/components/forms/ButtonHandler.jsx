import React, { useContext } from "react";
import ExportContextProject from "../../contexts/ProjectContext";

import rightarrowbutton from "../../assets/pictures/rightarrowbutton.png";
import leftarrowbutton from "../../assets/pictures/leftarrowbutton.png";

function ButtonHandler({ handleNextStep, currentStep, long }) {
  const { project } = useContext(ExportContextProject.ProjectContext);

  const handleSending = () => {
    console.warn(project);
  };

  return (
    <div className="button-wrapper">
      {currentStep >= 1 && (
        <button
          type="submit"
          onClick={() => handleNextStep("Return")}
          className="back-btn"
          id="back-btn"
        >
          <img src={leftarrowbutton} alt="vector" /> retour
        </button>
      )}
      {currentStep < long - 1 && (
        <button
          type="submit"
          formMethod="PUT"
          className="primarybutton"
          id="primarybutton"
        >
          Suivant <img src={rightarrowbutton} alt="rightarrowbutton" />
        </button>
      )}

      {currentStep >= long - 1 && (
        <button
          type="button"
          id="primarybutton"
          className="primarybutton"
          onClick={() => handleSending()}
        >
          Envoyer
        </button>
      )}
    </div>
  );
}

export default ButtonHandler;
