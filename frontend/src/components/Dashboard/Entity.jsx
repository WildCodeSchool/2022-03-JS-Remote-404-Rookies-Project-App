import React, { useState, useEffect } from "react";
import axios from "axios";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import modify from "../../assets/pictures/modify.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";

import users from "../../assets/dataset/users.json";

import DashboardButton from "./DashboardButton";
import UserList from "./UserList";

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
  }, []);

  return (
    <div className="flex flex-col mx-10 my-5 rounded-2xl shadow-md border">
      <div className="bg-gray-300 h-28 rounded-t-2xl flex justify-end">
        <DashboardButton
          action={{ logo: modify, text: "Modifier", link: "/team" }}
        />
      </div>
      <div className="flex -mt-12 items-center">
        <img
          src={entity && entity.image_url ? entity.image_url : blankPic}
          alt="entity-logo"
          className="w-24 rounded-3xl border-8 border-gray-400 ml-10"
        />
        <div className="flex mt-10">
          <p className="pl-5 font-bold text-emerald-700 text-xl">
            {entity && entity.name ? entity.name : "Structure non enregistrée"}
          </p>
          <div className="flex ml-5 px-2 items-center bg-gray-400 rounded-md">
            <img src={websiteLogo} alt="user-logo" className="max-h-5" />
            <p className="m-1 text-white text-xs bg-gray-400">
              {entity && entity.website
                ? entity.website
                : "Website not defined"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-6">
        {entity &&
          users
            .filter((u) => u.company_id === entity.id)
            .map((u) => <UserList user={u} />)}
      </div>
    </div>
  );
}

export default Entity;
