import React from "react";
import { useNavigate } from "react-router-dom";

import users from "../../assets/dataset/users.json";
import arrowLink from "../../assets/pictures/arrow-link.png";
import blankPic from "../../assets/pictures/blank-profile-picture.png";

function ProjectList({ project }) {
  const navigate = useNavigate();
  const projectOwner = users.find((user) => user.id === project.users_id);

  return (
    <div className="flex justify-between pb-5 items-center  text-ellipsis">
      <p className="text-blue-900 font-bold w-1/4">{project.project_name}</p>
      <p className="text-yellow-400 w-1/4">{project.status}</p>
      <div className="flex w-1/4">
        <img
          src={projectOwner.image_url ? projectOwner.image_url : blankPic}
          alt="owner"
          className="h-7 rounded-full mr-3"
        />
        <p className="text-gray-400">
          {projectOwner.firstname} {projectOwner.lastname}
        </p>
      </div>

      <button
        type="button"
        className="pl-10"
        onClick={() => navigate("/projets")}
      >
        <img src={arrowLink} alt="arrow link" className="h-7" />
      </button>
    </div>
  );
}

export default ProjectList;
