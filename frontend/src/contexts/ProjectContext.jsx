import { createContext, useState } from "react";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [project, setProject] = useState([]);

  const handleProject = (data) => {
    setProject({ ...project, ...data });
  };
  return (
    <ProjectContext.Provider
      value={{
        project,
        handleProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
const ExportContextProjet = {
  ProjectContext,
  ProjectProvider,
};
export default ExportContextProjet;
