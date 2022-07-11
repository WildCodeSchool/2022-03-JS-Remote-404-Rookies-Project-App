import { useState, useEffect, useContext } from "react";
import axios from "axios";

import ExportContextUser from "../../contexts/UserContext";

import ProjectSelected from "./ProjectSelected";
import MatchesInProject from "./MatchesInProject";

function SelectProject() {
  const { user } = useContext(ExportContextUser.UserContext);
  const [project, setProject] = useState();
  const [selected, setSelected] = useState();
  const handleChange = (value) => {
    const projectSelected = project.find((e) => e.id === value);
    setSelected(projectSelected);
  };
  // company-projects/

  useEffect(() => {
    const entityId = user.company_id;
    if (entityId) {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/company-projects/company/${entityId}`
        )
        .then((res) => setProject(res.data))
        .catch((err) => console.warn(err));
    }
  }, []);

  return (
    <div className="blocproject">
      <select className="menu1" onChange={(e) => handleChange(e.target.value)}>
        <option className="title1">Choisissez un projet</option>
        {project &&
          project.map((e, index) => (
            <option value={e.id} key={e.id}>{`${index + 1} - ${
              e.project_name
            }`}</option>
          ))}
      </select>
      {selected && <ProjectSelected project={selected} />}
      {selected && <MatchesInProject project={selected} />}
    </div>
  );
}

export default SelectProject;
