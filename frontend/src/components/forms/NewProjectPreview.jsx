/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import ButtonHandler from "./ButtonHandler";

export default function NewProjectPreview({
  handleNextStep,
  currentStep,
  long,
}) {
  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form className="p-2">
        <ButtonHandler
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          long={long}
        />
      </form>
    </div>
  );
}
