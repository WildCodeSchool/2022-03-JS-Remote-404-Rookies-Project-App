import React, { useState, useEffect } from "react";
import axios from "axios";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import modify from "../../assets/pictures/modify.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";

import DashboardButton from "./DashboardButton";

function Entity({ user }) {
  const [entity, setEntity] = useState();

  useEffect(() => {
    if (user.school_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/schools/${user.school_id}`)
        .then((res) => setEntity(res.data))
        .catch((err) => console.warn(err));
    } else if (user.company_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`)
        .then((res) => setEntity(res.data))
        .catch((err) => console.warn(err));
    }
  }, [user]);

  return (
    <div className="flex flex-col mx-10 my-5 rounded-2xl shadow-md border">
      <div className="banneerbg bg-gray-300 h-28 rounded-t-2xl flex justify-end">
        <DashboardButton
          action={{ logo: modify, text: "Modifier", link: "/team" }}
        />
      </div>
      <div className="flex -mt-8 items-center justify-left text-center mb-5 mr-2">
        <img
          src={
            entity?.image_url
              ? `${import.meta.env.VITE_BACKEND_URL}${entity.image_url}`
              : blankPic
          }
          alt="entity-logo"
          className="rounded-3xl border-4 border-gray-400 ml-10 bg-white flex items-center justify-center"
          id="avatar"
        />
        <div className="flex mt-10">
          <p className="pl-5 font-bold text-emerald-700 text-xl">
            {entity && entity.name ? entity.name : "Structure non enregistrée"}
          </p>
          <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
            <img src={websiteLogo} alt="user-logo" className="max-h-5" />
            <p className="m-1 text-white text-xs bg-gray-400 w-15">
              {entity && entity.website
                ? entity.website
                : "Website not defined"}
            </p>
          </div>
          {entity && entity.campuses && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                {entity.campuses}
              </p>
            </div>
          )}
          {entity && entity.workforces_id && entity.workforces_id === 1 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                {entity.workforces_id} employés
              </p>
            </div>
          )}
          {entity && entity.workforces_id && entity.workforces_id === 2 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                entre 2 et 9 employés
              </p>
            </div>
          )}
          {entity && entity.workforces_id && entity.workforces_id === 3 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                entre 10 et 49 employés
              </p>
            </div>
          )}
          {entity && entity.workforces_id && entity.workforces_id === 4 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                entre 50 et 249 employés
              </p>
            </div>
          )}
          {entity && entity.workforces_id && entity.workforces_id === 5 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                + 250 employés
              </p>
            </div>
          )}
          {entity && entity.sectors_id && entity.sectors_id === 17 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                Transport et Logistique
              </p>
            </div>
          )}
          {entity && entity.sectors_id && entity.sectors_id === 6 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                Commerce/négoce/distribution
              </p>
            </div>
          )}
          {entity && entity.sectors_id && entity.sectors_id === 7 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                Edition/Communication/multimedia
              </p>
            </div>
          )}
          {entity && entity.sectors_id && entity.sectors_id === 11 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">Informatique</p>
            </div>
          )}
          {entity && entity.sectors_id && entity.sectors_id === 15 && (
            <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
              <p className="m-1 text-white text-xs bg-gray-400">
                services aux entreprises
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entity;
