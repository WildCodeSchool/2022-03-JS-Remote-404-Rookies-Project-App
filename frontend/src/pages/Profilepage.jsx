import React from "react";
import ProfileSchool from "../components/forms/ProfileSchool";
import ProfileCompany from "../components/forms/ProfileCompany";
import Navbar from "../components/Navbar";

import users from "../assets/dataset/users.json";

function Profilepage() {
  const user = users[1]; // users 1 =   ecole dans la  bdd test  users 2 =   entreprise dans la  bdd test

  return (
    <div className="flex ">
      <Navbar />
      {user.entity_category_id === 1 && <ProfileSchool />}
      {user.entity_category_id === 2 && <ProfileCompany />}
    </div>
  );
}

export default Profilepage;
