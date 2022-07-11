import React from "react";

import ProjectSelected from "./ProjectSelected";
import MatchesInProject from "./MatchesInProject";

function SelectProject({ selected, setSelected, project }) {
  const handleChange = (value) => {
    const projectSelected = project.find((e) => e.id === value);
    setSelected(projectSelected);
  };

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
