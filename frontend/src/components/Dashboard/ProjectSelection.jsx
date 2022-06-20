import React from "react";
import axios from "axios";

import ProjectSelected from "./ProjectSelected";
import MatchesInProject from "./MatchesInProject";

function SelectProject() {
  const [project, setProject] = React.useState();
  const [selected, setSelected] = React.useState();
  const handleChange = (value) => {
    const projectSelected = project.find((e) => e.id === value);
    setSelected(projectSelected);
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/company-projects")
      .then((res) => setProject(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="blocproject">
      <select className="menu1" onChange={(e) => handleChange(e.target.value)}>
        <option className="title1">Choisissez un projet</option>
        {project &&
          project.map((e, id, index) => (
            <option
              value={e.id}
              key={index}
            >{`${e.id}-${e.project_name}`}</option>
          ))}
      </select>
      {selected && <ProjectSelected project={selected} />}
      {selected && <MatchesInProject project={selected} />}
    </div>
  );
}

export default SelectProject;
