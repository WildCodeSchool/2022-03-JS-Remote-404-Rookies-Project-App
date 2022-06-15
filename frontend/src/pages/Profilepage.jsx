import React from "react";

import PasswordChange from "../components/forms/PasswordChange";
import DeleteProfile from "../components/forms/DeleteProfile";
import UserInformations from "../components/forms/UserInformations";

function Profilepage() {
  return (
    <div className="flex flex-col items-center">
      <div className=" flex w-full  ">
        <h1 className="  m-5 text-emerald-700">Mon profil</h1>
      </div>

      <UserInformations />
      <PasswordChange />
      <DeleteProfile />
    </div>
  );
}

export default Profilepage;
