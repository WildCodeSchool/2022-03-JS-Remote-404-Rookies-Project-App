import React from "react";
import StepForm from "./StepForm";

function NavigationForm({ navData, currentStep }) {
  return (
    <div className="stepWrapper">
      {navData.map((item, index) => (
        <StepForm
          key={item.label}
          index={index}
          label={item.label}
          selected={currentStep >= index}
          labelImages={item.image}
        />
      ))}
    </div>
  );
}

export default NavigationForm;
