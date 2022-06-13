import React from "react";

import DeleteProfile from "./DeleteProfile";
import PasswordChange from "./PasswordChange";
import SchoolInformations from "./SchoolInformations";
import MySchool from "./MySchool";

export default function ProfileSchool() {
  return (
    <div className=" flex-col  p-5  bg-gray-100 m-5 rounded-md ">
      <div className="text-emerald-700 text-base p-5">
        <h1 className="text-base">Mon profil</h1>
      </div>

      <div className="bg-gray-100 rounded-md flex flex-wrap flex-row">
        <SchoolInformations />
        <MySchool />
        <PasswordChange />
        <DeleteProfile />
      </div>
    </div>
  );
}
