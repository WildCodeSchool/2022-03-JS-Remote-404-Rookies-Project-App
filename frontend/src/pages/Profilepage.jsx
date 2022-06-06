import React from "react";
import ProfileEcole from "../components/ProfileEcole";
import ProfileEntreprise from "../components/Profileentreprise";
import Navbar from "../components/Navbar";

import users from "../assets/dataset/users.json";

function Profilepage() {
  const user = users[1]; // users 1 =   ecole dans la  bdd test  users 2 =   entreprise dans la  bdd test

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-col w-full">
        {user.entity_category_id === 1 && <ProfileEcole />}
        {user.entity_category_id === 2 && <ProfileEntreprise />}
      </div>
    </div>
  );
}

export default Profilepage;
