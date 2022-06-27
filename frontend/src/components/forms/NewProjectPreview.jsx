/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";

import ButtonHandler from "./ButtonHandler";
import CompanyProjectOverview from "./CompanyProjectOverview";

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
    <div className="bg-gray-100 rounded-md flex flex-col w-full items-center">
      <div className="w-full">
        {project.course && <div>School</div>}
        {project.project_types_id && (
          <CompanyProjectOverview user={user} project={project} />
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
