import React from "react";
import SchoolStepForm from "./SchoolStepForm";

function SchoolNavigationForm({ labelArray, labelImages, currentStep }) {
  return (
    <div className="stepWrapper">
      {labelArray.map((item, index) => (
        <SchoolStepForm
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

export default SchoolNavigationForm;
