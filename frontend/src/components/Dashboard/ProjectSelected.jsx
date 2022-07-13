import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import planning from "../../assets/pictures/planning-project.png";
import Share from "../../assets/pictures/share.png";

function ProjectSelection({ project }) {
  const [stages, setStages] = useState();
  const [fields, setFields] = useState();

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
          {project?.goal && (
            <>
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
                    <p className="p-2 bg-gray-400 text-white rounded-md">
                      {field.field}
                    </p>
                  ))}
              </div>
              <h5 className="titleh2">L’entreprise en quelques mots</h5>
              <p className="ph2">{project.ressources_available}</p>
            </>
          )}
          {project?.course && (
            <div className="flex flex-col w-100 p-6">
              <h3 className="text-emerald-700 text-xl pb-2">
                Quel est le domaine du projet ?
              </h3>
              <div className="flex">
                <p className="p-2 bg-gray-400 text-white rounded-md">
                  {fields && fields[0].field}
                </p>
              </div>

              <h3 className="text-emerald-700 text-xl pb-2 mt-2">
                Les dates clés ?{" "}
              </h3>
              <img src={planning} alt="planning" className="w-full" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-gray-500">Soumission du projet</p>
                  <p className="text-red-500">
                    Avant le : {project?.submission_date.slice(0, 10)}
                  </p>
                </div>
                <div className="mr-52">
                  <p className="text-gray-500">Lancement</p>
                  <p className="text-green-500">
                    le : {project?.start_date.slice(0, 10)}
                  </p>
                </div>
                <div className="ml-52">
                  <p className="text-gray-500">Date de cloture</p>
                  <p className="text-green-500">
                    le : {project?.end_date.slice(0, 10)}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 pb-2">
                {project?.ressources_available}
              </p>
              <h3 className="text-emerald-700 text-xl pb-2">
                Organisation du projet ?
              </h3>
              <div className="grid grid-cols-2">
                <p className="text-gray-500 p-2 border text-center">
                  {project?.group_size} étudiants par projet
                </p>
                <p className="text-gray-500 p-2 border text-center">
                  {project?.weekly_time_dedicated}h par semaine
                </p>
                <p className="text-gray-500 p-2 border text-center">
                  Niveau : {project?.level}
                </p>
                <p className="text-gray-500 p-2 border text-center">
                  {project?.group_quantity} projets disponibles
                </p>
              </div>

              <h3 className="text-emerald-700 text-xl pb-2 mt-2">
                Les objectif du projet ?
              </h3>
              <p className="text-gray-500 pb-2">{project?.objectives}</p>
              <h3 className="text-emerald-700 text-xl pb-2 mt-2">
                Quelles livrables pourront etre remis à l’entreprise ?
              </h3>
              <p className="text-gray-500 pb-2">{project?.mission_examples}</p>
              <h3 className="text-emerald-700 text-xl pb-2 mt-2">
                Type des entreprises concernées ?
              </h3>
              <div className="flex mb-2">
                <p className="text-gray-500 p-2 w-32">Taille</p>
                <p className="p-2 bg-gray-400 text-white rounded-md">
                  Sans préférences
                </p>
              </div>
              <div className="flex mb-2">
                <p className="text-gray-500 p-2 w-32">Industrie</p>
                <p className="p-2 bg-gray-400 text-white rounded-md">
                  Sans préférences
                </p>
              </div>
              <div className="flex mb-2">
                <p className="text-gray-500 p-2 w-32 mt-2">Localisation</p>
                <p className="p-2 bg-gray-400 text-white rounded-md">
                  {project?.ideal_location
                    ? project.ideal_location
                    : "Sans préférences"}
                </p>
                <p className="p-2 bg-gray-400 text-white rounded-md ml-2">
                  {project?.remote === 0
                    ? "Possible en distanciel"
                    : "Présentiel uniquement"}
                </p>
              </div>

              <h3 className="text-emerald-700 text-xl pb-2 mt-2">
                Engagement de l’entreprise ?
              </h3>
              <p className="text-gray-500 pb-2">{project?.commitment}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectSelection;
