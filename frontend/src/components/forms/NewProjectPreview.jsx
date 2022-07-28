/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";

import ButtonHandler from "./ButtonHandler";
import CompanyProjectOverview from "./CompanyProjectOverview";
import SchoolProjectOverview from "./SchoolProjectOverview";

import ExportContextProject from "../../contexts/ProjectContext";
import ExportContextUser from "../../contexts/UserContext";

export default function NewProjectPreview({
  handleNextStep,
  currentStep,
  long,
}) {
  const { project } = useContext(ExportContextProject.ProjectContext);
  const { user } = useContext(ExportContextUser.UserContext);

  return (
    <div
      className="bg-gray-100 rounded-md flex flex-col items-center mb-10 overflow-y-scroll"
      id="megaheight"
    >
      <div className="w-full flex justify-center">
        {user.entity_category_id === 1 && (
          <CompanyProjectOverview user={user} project={project} />
        )}
        {user.entity_category_id === 2 && (
          <SchoolProjectOverview user={user} project={project} />
        )}
      </div>
      <ButtonHandler
        handleNextStep={handleNextStep}
        currentStep={currentStep}
        long={long}
      />
    </div>
  );
}
