import { createContext, useState } from "react";

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const [project, setProject] = useState([1]);

  return (
    <ProjectContext.Provider
      value={{
        project,
        setProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
const ExportContext = {
  ProjectContext,
  ProjectProvider,
};
export default ExportContext;
