import React from "react";
import ProfileSchool from "../components/forms/ProfileSchool";
import ProfileCompany from "../components/forms/ProfileCompany";
import Navbar from "../components/Navbar";

import users from "../assets/dataset/users.json";

function Profilepage() {
  const user = users[1]; // users 2 =   ecole dans la  bdd test  users 1 =   entreprise dans la  bdd test

  return (
    <div className="flex ">
      <Navbar />
      {user.entity_category_id === 1 && <ProfileCompany />}
      {user.entity_category_id === 2 && <ProfileSchool />}
    </div>
  );
}

export default Profilepage;
