import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import userLogo from "../../assets/pictures/user-logo.png";
import mailLogo from "../../assets/pictures/mail-logo.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";
import planning from "../../assets/pictures/planning-project.png";

function SchoolProjectShare({ user, project }) {
  const [fields, setFields] = useState();
  const [levels, setLevels] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/fields/`)
      .then((res) => setFields(res.data.find((f) => f.id === 1)))
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/levels/`)
      .then((res) =>
        setLevels(
          res.data.find((l) => l.id === parseInt(project.student_level_id, 10))
        )
      )
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <ToastContainer />
      <div className="flex flex-col items-center rounded-2xl w-full bg-white">
        {/* header */}
        <div className="flex justify-around w-full">
          {/* company */}
          <div className="flex flex-col items-center py-5 px-10">
            <img
              src={project?.logo ? project.logo : blankPic}
              alt="company-logo"
              className="w-40 rounded-3xl border-8 border-gray-400"
            />

            <p className="font-bold text-emerald-700 text-xl m-2">
              {project.name}
            </p>
            <div className="flex items-center bg-gray-400 rounded-md mb-2">
              <img src={websiteLogo} alt="user-logo" className="h-4 m-2" />
              <p className="px-2 bg-gray-400 text-white rounded-md">
                {project.website ? project.website : "Site web non renseigné"}
              </p>
            </div>
            <div className="flex items-center bg-gray-400 rounded-md mb-2">
              <p className="px-2 bg-gray-400 text-white rounded-md">
                {project.campus ? project.campus : "Campus non renseigné"}
              </p>
            </div>
          </div>
          {/* user */}
          <div className="flex flex-col items-center py-5 px-10">
            <img
              src={
                user.image_url
                  ? `${import.meta.env.VITE_BACKEND_URL}${user.image_url}`
                  : blankPic
              }
              alt="user-profile-pic"
              className="w-40 rounded-full border-8 border-gray-100"
            />
            <p className="font-bold text-emerald-700 text-xl m-2">
              {user.firstname} {user.lastname}
            </p>
            <div className="flex flex-col">
              <div className="flex items-center">
                <img src={userLogo} alt="user-logo" className="max-h-5" />
                <p className="pl-2 text-gray-400">
                  {user.role ? user.role : "Role non définit"}
                </p>
              </div>
              <div className="flex items-center">
                <img src={mailLogo} alt="mail-logo" className="max-h-4 mr-2" />
                <p className=" text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-center text-5xl border-t-4 border-b-4 w-full text-gray-400 border-gray-400 p-4 font-thin">
          {project?.name}
          <br />
          {project?.course}
          <br />
          {levels && levels.level}
        </h1>
        {/* Project */}
        <div className="flex flex-col w-100 p-6">
          <div className="flex justify-between">
            <h2 className="text-emerald-700 text-3xl underline pb-4">
              Mon brief:
            </h2>
          </div>
          <h3 className="text-emerald-700 text-xl pb-2">
            Quel est le domaine du projet ?
          </h3>
          <div className="flex">
            <p className="p-2 bg-gray-400 text-white rounded-md">
              {fields && fields.field}
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
          <p className="text-gray-500 pb-2">{project?.ressources_available}</p>
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
              {project.remote === 0
                ? "Possible en distanciel"
                : "Présentiel uniquement"}
            </p>
          </div>

          <h3 className="text-emerald-700 text-xl pb-2 mt-2">
            Engagement de l’entreprise ?
          </h3>
          <p className="text-gray-500 pb-2">{project?.commitment}</p>
        </div>
        <button
          type="button"
          onClick={() => notifySuccess("Match soumis !")}
          className="bg-green-400 text-white py-2 px-4 rounded-lg mx-10 hover:bg-green-700 mb-10"
        >
          Candidater
        </button>
      </div>
    </div>
  );
}

export default SchoolProjectShare;
