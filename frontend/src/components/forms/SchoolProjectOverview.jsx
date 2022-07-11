import React from "react";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import userLogo from "../../assets/pictures/user-logo.png";
import mailLogo from "../../assets/pictures/mail-logo.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";

function SchoolProjectOverview({ user, project }) {
  return (
    <div className="flex flex-col items-center w-full px-20 py-10 ">
      <h1 className="text-xl mb-10">Prévisualiser votre cours :</h1>
      <div className="flex flex-col items-center rounded-2xl w-full bg-white">
        {/* header */}
        <div className="flex justify-between w-full">
          {/* user */}
          <div className="flex flex-col items-center py-5 px-10">
            <img
              src={user.photo ? user.photo : blankPic}
              alt="user-profile-pic"
              className="w-32 rounded-full border-8 border-gray-100"
            />
            <p className="font-bold text-emerald-700 text-xl">
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
                <img src={mailLogo} alt="mail-logo" className="max-h-4" />
                <p className=" text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
          {/* company */}
          <div className="flex flex-col items-center py-5 px-10">
            <img
              src={project.logo ? project.logo : blankPic}
              alt="company-logo"
              className="w-32 rounded-3xl border-8 border-gray-400"
            />

            <p className="font-bold text-emerald-700 text-xl">{project.name}</p>
            <div className="flex items-center bg-gray-400 rounded-md mb-1">
              <img src={websiteLogo} alt="user-logo" className="max-h-5" />
              <p className=" text-white text-xs bg-gray-400">
                {project.website ? project.website : "Site web non renseigné"}
              </p>
            </div>
            <div className="flex items-center bg-gray-400 rounded-md mb-1">
              <img src={websiteLogo} alt="user-logo" className="max-h-5" />
              <p className=" text-white text-xs bg-gray-400">
                {project.range ? project.range : "Effectif non renseigné"}
              </p>
            </div>
            <div className="flex items-center bg-gray-400 rounded-md mb-1">
              <img src={websiteLogo} alt="user-logo" className="max-h-5" />
              <p className=" text-white text-xs bg-gray-400">
                {project.sector ? project.sector : "Secteur non renseigné"}
              </p>
            </div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-center text-3xl border-t-4 border-b-4 w-full text-gray-400 border-gray-400 p-4">
          {project.project_name}
        </h1>
        {/* Project */}
        <div className="flex flex-col w-full p-6">
          <div className="flex justify-between">
            <h2 className="text-emerald-700 text-2xl underline pb-4">
              Brief du projet :
            </h2>
            <p className="text-sm text-gray-500 underline">
              Fin souhaitée avant le : {project.end_date.getDay()}/
              {project.end_date.getMonth()}/{project.end_date.getFullYear()}
            </p>
          </div>
          <h3 className="text-emerald-700 text-xl pb-2">
            L’objectif principal du projet ?
          </h3>
          <p className="text-gray-500 pb-2">{project.goal}</p>
          <h3 className="text-emerald-700 text-xl pb-2">
            Quelles seront les ressources disponibles pour les étudiants ?
          </h3>
          <p className="text-gray-500 pb-2">{project.ressources_available}</p>
          <h3 className="text-emerald-700 text-xl pb-2">
            Quel est le ou les domaines du projet ?
          </h3>
          {project.sector.split(" ").map((d) => (
            <option key={d.sector}>{d.sector}</option>
          ))}
          <h3 className="text-emerald-700 text-xl pb-2">
            L’entreprise en quelques mots
          </h3>
          <p className="text-gray-500 pb-2">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SchoolProjectOverview;
