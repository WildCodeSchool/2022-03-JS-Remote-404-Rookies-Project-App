import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExportContextUser from "../contexts/UserContext";

import plusLogo from "../assets/pictures/add.png";
import "../styles/Project.css";

import UserSettings from "../components/Dashboard/UserSettings";
import DashboardButton from "../components/Dashboard/DashboardButton";
import ProjectSelection from "../components/Dashboard/ProjectSelection";

function Project() {
  const { user } = useContext(ExportContextUser.UserContext);
  const [project, setProjects] = useState();
  const [selected, setSelected] = useState();
  const projectParams = useParams();

  useEffect(() => {
    if (user.company_id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/company-projects/company/${
            user.company_id
          }`
        )
        .then((res) => setProjects(res.data))
        .catch((err) => console.warn(err));
    } else if (user.school_id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/school-ressources/school/${
            user.school_id
          }`
        )
        .then((res) => setProjects(res.data))
        .catch((err) => console.warn(err));
    }
  }, [user]);

  useEffect(() => {
    if (project && projectParams.id) {
      setSelected(project.find((p) => p.id === projectParams.id));
    }
  }, [project]);

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col">
        <div className="flex justify-between m-10 items-center text-gray-500">
          <p>
            {user.company_id ? "Mon entreprise" : "Mon école"} / Mes Projets /
            {selected && selected?.project_name
              ? selected?.project_name
              : selected?.course}
          </p>
          <UserSettings />
        </div>
        {project && (
          <ProjectSelection
            setSelected={setSelected}
            selected={selected}
            project={project}
          />
        )}
        <DashboardButton
          action={{ logo: plusLogo, text: "Ajouter", link: "/submission" }}
        />
      </div>
    </div>
  );
}

export default Project;
