import React, { useState, useEffect } from "react";
import axios from "axios";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import userLogo from "../../assets/pictures/user-logo.png";
import mailLogo from "../../assets/pictures/mail-logo.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";

function CompanyProjectOverview({ user, project }) {
  const [fields, setFields] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`)
      .then((res) => setCompany(res.data))
      .catch((err) => console.warn(err));
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
  }, []);

  return (
    <div className="flex flex-col items-center w-2/3">
      <h1 className="text-xl mb-10">Prévisualiser votre projet :</h1>
      <div className="flex flex-col items-center rounded-2xl w-full bg-white">
        {/* header */}
        <div className="flex justify-between w-full">
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

          {/* company */}
          <div className="flex flex-col items-center py-5 px-10">
            <img
              src={
                company && company.image_url
                  ? `${import.meta.env.VITE_BACKEND_URL}${company.image_url}`
                  : blankPic
              }
              alt="company-logo"
              className="w-40 rounded-3xl border-8 border-gray-400"
            />

            <p className="font-bold text-emerald-700 text-xl m-2">
              {project.project_name}
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
        </div>
        {/* Title */}
        <h1 className="text-center text-5xl border-t-4 border-b-4 w-full text-gray-400 border-gray-400 p-4 font-thin">
          {project.project_name}
        </h1>
        {/* Project */}
        <div className="flex flex-col w-100 p-6">
          <div className="flex justify-between">
            <h2 className="text-emerald-700 text-3xl underline pb-4">
              Brief du projet :
            </h2>
            <p className="text-sm text-gray-500 underline">
              Fin souhaitée avant le : {project.end_date.getDay()}/
              {project.end_date.getMonth()}/{project.end_date.getFullYear()}
            </p>
          </div>

          <h3 className="text-emerald-700 text-xl pb-2 mt-2">
            L’objectif principal du projet ?
          </h3>
          <p className="text-gray-500 pb-2">{project.goal}</p>

          <h3 className="text-emerald-700 text-xl pb-2 mt-2">
            Quelles seront les ressources disponibles pour les étudiants ?
          </h3>
          <p className="text-gray-500 pb-2">{project.ressources_available}</p>

          <h3 className="text-emerald-700 text-xl pb-2 mt-2">
            Quel est le ou les domaines du projet ?
          </h3>
          <div className="flex">
            <p className="p-2 bg-gray-400 text-white rounded-md">
              {fields && fields.field}
            </p>
          </div>

          <h3 className="text-emerald-700 text-xl pb-2 mt-2">
            L’entreprise en quelques mots
          </h3>
          <p className="text-gray-500 pb-2">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyProjectOverview;
