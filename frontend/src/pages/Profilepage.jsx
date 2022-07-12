import React from "react";

import PasswordChange from "../components/forms/PasswordChange";
import DeleteProfile from "../components/forms/DeleteProfile";
import UserInformations from "../components/forms/UserInformations";
import UserSettings from "../components/Dashboard/UserSettings";

function Profilepage() {
  return (
    <div className="border-b-2 flex flex-wrap  items-center  justify-center p-2 w-full h-full">
      <div className="flex justify-between w-11/12 items-center mb-5 mt-5 ">
        <h1 className="m-5 text-2xl text-emerald-700">Mon équipe</h1>
        <UserSettings />
      </div>
      <div className="border-b-2  bg-gray-100 flex flex-col justify-center flex-wrap w-11/12 rounded-lg">
        <UserInformations />
        <PasswordChange />
        <DeleteProfile />
      </div>
    </div>
  );
}

export default Profilepage;
