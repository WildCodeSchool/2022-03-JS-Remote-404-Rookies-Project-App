import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import Share from "../../assets/pictures/share.png";

function ProjectSelection({ project }) {
  const [stages, setStages] = useState([]);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stages`)
      .then((res) => setStages(res.data))
      .catch((err) => console.warn(err));
    if (project.project_name) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/project-fields/${project.id}`)
        .then((res) => setFields(res.data))
        .catch((err) => console.warn(err));
    } else if (project.course) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/ressource-fields/${project.id}`
        )
        .then((res) => setFields(res.data))
        .catch((err) => console.warn(err));
    }
  }, []);

  return (
    <div className="blocproject">
      <ToastContainer />
      <div className="bloc">
        <div className="blocproject2">
          <h1 className="title2">AVANCEMENT DU PROJET</h1>
          {stages &&
            stages.map((stage) => {
              return (
                <p
                  className={`p-2 ${
                    project.stages_id < stage.id
                      ? "text-gray-300"
                      : "text-green-400 font-bold"
                  }`}
                >
                  &bull; {stage.stage}
                </p>
              );
            })}
        </div>
        <div className="blocproject3">
          <div className="blocproject3bis">
            <h1 className="title3">Brief du projet :</h1>
            <div className="shareedit">
              <button
                type="submit"
                className="share"
                onClick={() => {
                  notifySuccess("Lien copié !");
                  navigator.clipboard.writeText(
                    `http://localhost:3000/share/${
                      project.goal ? "company-projects" : "school-ressources"
                    }/${project.id}`
                  );
                }}
              >
                <img src={Share} alt={Share} />
                Partager
              </button>

              <button type="submit" className="edit">
                Modifier
              </button>
            </div>
          </div>
          <div className="bloc6">
            <h2 className="titleh2">L’objectif principal du projet ?</h2>
            <p className="ph3">
              Fin souhaité avant le : {project.end_date.slice(0, 10)}
            </p>
          </div>
          <p className="ph2">{project.goal}</p>
          <h3 className="titleh2">
            Quelles seront les ressources disponibles pour les étudiants ?
          </h3>
          <p className="ph2">{project.ressources_available}</p>
          <h4 className="titleh2">Quel est le domaine du projet ?</h4>
          <div className="domaineproject">
            {fields &&
              fields.map((field) => (
                <p className="circlegrey">{field.field}</p>
              ))}
          </div>
          <h5 className="titleh2">L’entreprise en quelques mots</h5>
          <p className="ph2">{project.ressources_available}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSelection;
