import React, { useState, useEffect } from "react";
import axios from "axios";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import userLogo from "../../assets/pictures/user-logo.png";
import mailLogo from "../../assets/pictures/mail-logo.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";
import planning from "../../assets/pictures/planning-project.png";

function SchoolProjectOverview({ user, project }) {
  const [fields, setFields] = useState();
  const [school, setSchool] = useState();
  const [levels, setLevels] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/fields/`)
      .then((res) =>
        setFields(
          res.data.find(
            (f) => f.id === parseInt(project.teaching_fields[0], 10)
          )
        )
      )
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/schools/${user.school_id}`)
      .then((res) => setSchool(res.data))
      .catch((err) => console.warn(err));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/levels/`)
      .then((res) =>
        setLevels(res.data.find((l) => l.id === parseInt(project.level, 10)))
      )
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="flex flex-col items-center w-11/12 rounded-lg">
      <h1 className="text-xl mb-10">Prévisualiser votre cours :</h1>
      <div className="flex flex-col items-center rounded-2xl w-full bg-white">
        {/* header */}
        <div className="flex justify-between w-full">
          {/* company */}
          <div className="flex flex-col items-center py-5 px-10">
            {school && school.image_url ? (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${school.image_url}`}
                alt="school-logo"
                className="w-40 h-40 rounded-3xl border-8 border-gray-400"
              />
            ) : (
              blankPic
            )}

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
              className="w-40 h-40 rounded-full border-8 border-gray-100"
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

          <h3 className="text-emerald-700 text-xl pb-2 mt-2">
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
                Avant le : {project?.submission_date.getDay()}/
                {project?.submission_date.getMonth()}/
                {project?.submission_date.getFullYear()}
              </p>
            </div>
            <div className="mr-52">
              <p className="text-gray-500">Lancement</p>
              <p className="text-green-500">
                le : {project?.start_date.getDay()}/
                {project?.start_date.getMonth()}/
                {project?.start_date.getFullYear()}
              </p>
            </div>
            <div className="ml-52">
              <p className="text-gray-500">Date de cloture</p>
              <p className="text-green-500">
                le : {project?.end_date.getDay()}/{project?.end_date.getMonth()}
                /{project?.end_date.getFullYear()}
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
      </div>
    </div>
  );
}

export default SchoolProjectOverview;
