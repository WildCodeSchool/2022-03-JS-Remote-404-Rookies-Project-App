import React from "react";

import blankPic from "../../assets/pictures/blank-profile-picture.png";
import modify from "../../assets/pictures/modify.png";
import websiteLogo from "../../assets/pictures/mouse-logo.png";

import schools from "../../assets/dataset/schools.json";
import companies from "../../assets/dataset/companies.json";
import users from "../../assets/dataset/users.json";

import DashboardButton from "./DashboardButton";

function Entity({ user }) {
  const entity = user.school_id
    ? schools[user.school_id - 1]
    : companies[user.company_id - 1];

  return (
    <div className="flex flex-col mx-10 my-5 rounded-2xl shadow-md border">
      <div className="bg-gray-300 h-14 rounded-t-2xl flex justify-end">
        <DashboardButton
          action={{ logo: modify, text: "Modifier", link: "/profile" }}
        />
      </div>
      <div className="flex -mt-12 items-center">
        <img
          src={entity && entity.logo ? entity.logo : blankPic}
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
          user.entity_category_id === 2 &&
          users.map((e) =>
            e.school_id === entity.id ? (
              <div className="flex justify-between w-full">
                <p className="text-gray-400">
                  {e.firstname} {e.lastname}
                </p>
                <p className="text-gray-400">{e.email}</p>
                <p className="text-gray-400">
                  {e.is_admin === 0 ? "Admin" : "Not admin"}
                </p>
                <p className="text-gray-400">&bull;&bull;&bull;</p>
              </div>
            ) : null
          )}
        {entity &&
          user.entity_category_id === 1 &&
          users.map((e) =>
            e.company_id === entity.id ? (
              <div className="flex justify-between w-full">
                <p className="text-gray-400">
                  {e.firstname} {e.lastname}
                </p>
                <p className="text-gray-400">{e.email}</p>
                <p className="text-gray-400">
                  {e.is_admin === 0 ? "Admin" : "Not admin"}
                </p>
                <p className="text-gray-400">&bull;&bull;&bull;</p>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}

export default Entity;
