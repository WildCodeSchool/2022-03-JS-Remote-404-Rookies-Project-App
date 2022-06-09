import React from "react";
import ProfileEcole from "../components/forms/ProfileEcole";
import ProfileEntreprise from "../components/forms/Profileentreprise";
import Navbar from "../components/Navbar";

import users from "../assets/dataset/users.json";

function Profilepage() {
  const user = users[1]; // users 1 =   ecole dans la  bdd test  users 2 =   entreprise dans la  bdd test

  return (
    <div className="flex-col w-full">
      <Navbar />
      {user.entity_category_id === 1 && <ProfileEcole />}
      {user.entity_category_id === 2 && <ProfileEntreprise />}
    </div>
  );
}

export default Profilepage;
