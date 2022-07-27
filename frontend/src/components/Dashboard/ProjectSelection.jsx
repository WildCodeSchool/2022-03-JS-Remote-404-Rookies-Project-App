import React from "react";

import ProjectSelected from "./ProjectSelected";
import MatchesInProject from "./MatchesInProject";

function SelectProject({ selected, setSelected, project, user }) {
  const handleChange = (value) => {
    const projectSelected = project.find((e) => e.id === value);
    setSelected(projectSelected);
  };

  return (
    <div className="blocproject">
      <select
        className="menu1 font-bold"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option className="title1 font-bold">Choisissez un projet</option>
        {project &&
          user.company_id &&
          project.map((e, index) => (
            <option value={e.id} key={e.id}>{`${index + 1} - ${
              e.project_name
            }`}</option>
          ))}
        {project &&
          user.school_id &&
          project.map((e, index) => (
            <option value={e.id} key={e.id}>{`${index + 1} - ${
              e.course
            }`}</option>
          ))}
      </select>
      {selected && <ProjectSelected project={selected} user={user} />}
      {selected && <MatchesInProject project={selected} user={user} />}
    </div>
  );
}

export default SelectProject;
