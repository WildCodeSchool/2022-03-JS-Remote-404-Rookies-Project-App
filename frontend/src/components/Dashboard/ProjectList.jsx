import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import arrowLink from "../../assets/pictures/arrow-link.png";
import blankPic from "../../assets/pictures/blank-profile-picture.png";

function ProjectList({ project }) {
  const navigate = useNavigate();
  const [projectOwner, setProjectOwner] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profiles`)
      .then((res) =>
        setProjectOwner(
          res.data.find(
            (user) => parseInt(user.id, 10) === project.profiles_id,
            10
          )
        )
      )
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="flex justify-between pb-5 items-center  text-ellipsis">
      <p className="text-blue-900 font-bold w-1/4">{project.project_name}</p>
      <p className="text-yellow-400 w-1/4">{project.stage}</p>
      <div className="flex w-1/4">
        <img
          src={
            projectOwner && projectOwner.image_url
              ? `${import.meta.env.VITE_BACKEND_URL}${projectOwner.image_url}`
              : blankPic
          }
          alt="owner"
          className="h-7 rounded-full mr-3"
        />
        <p className="text-gray-400">
          {projectOwner && projectOwner.firstname}{" "}
          {projectOwner && projectOwner.lastname}
        </p>
      </div>

      <button
        type="button"
        className="pl-10"
        onClick={() => navigate("/projets/1")}
      >
        <img src={arrowLink} alt="arrow link" className="h-7" />
      </button>
    </div>
  );
}

export default ProjectList;
