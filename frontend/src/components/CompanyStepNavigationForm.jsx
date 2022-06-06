import React from "react";
import CompanyStepForm from "./CompanyStepForm";

function CompanyStepNavigationForm({ labelArray, labelImages, currentStep }) {
  return (
    <div className="stepWrapper">
      {labelArray.map((item, index) => (
        <CompanyStepForm
          key={item}
          index={index}
          label={item}
          selected={currentStep > index}
          labelImages={labelImages[index]}
        />
      ))}
    </div>
  );
}

export default CompanyStepNavigationForm;
