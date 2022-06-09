import React from "react";

import plusLogo from "../../assets/pictures/add.png";
import blankPic from "../../assets/pictures/blank-profile-picture.png";
import modify from "../../assets/pictures/modify.png";

import schools from "../../assets/dataset/schools.json";
import companies from "../../assets/dataset/companies.json";

import DashboardButton from "./DashboardButton";

function Entity({ user }) {
  const entity = user.school_id
    ? schools[user.school_id - 1]
    : companies[user.company_id - 1];

  return (
    <div className="flex flex-col mx-10 rounded-2xl shadow-md border">
      <div className="flex justify-between">
        <h2 className="text-emerald-700 m-5">Ma structure</h2>
        <DashboardButton
          action={{ logo: plusLogo, text: "Inviter", link: "/profile" }}
        />
      </div>
      {user.school_id || user.company_id ? (
        <img
          src={entity.logo ? entity.logo : blankPic}
          alt="user-profile-pic"
          className="w-24 rounded-full border-4 border-gray-300 m-2"
        />
      ) : (
        <DashboardButton
          action={{
            logo: modify,
            text: "Structure",
            link: "/profile",
          }}
        />
      )}
    </div>
  );
}

export default Entity;
