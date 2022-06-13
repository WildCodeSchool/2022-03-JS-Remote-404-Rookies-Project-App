import React from "react";

import CompanyInformations from "./CompanyInformations";
import Mycompany from "./Mycompany";
import PasswordChange from "./PasswordChange";
import DeleteProfile from "./DeleteProfile";

export default function ProfileCompany() {
  return (
    <div className="  flex-col  p-5  bg-gray-100 m-5 rounded-md ">
      <div className="text-emerald-700 text-base p-5">
        <h1 className="text-base">Mon profil</h1>
      </div>
      <CompanyInformations />
      <Mycompany />
      <PasswordChange />
      <DeleteProfile />
    </div>
  );
}
