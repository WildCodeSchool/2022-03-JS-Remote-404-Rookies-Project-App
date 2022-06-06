import React from "react";
import Navbar from "../components/Navbar";

import users from "../assets/dataset/users.json";
import SchoolProgressStep from "../components/SchoolProgressStep";
import CompanyProgressStep from "../components/CompanyProgressStep";

function Submission() {
  const user = users[1]; // users 1 =   ecole dans la  bdd test  users 2 =   entreprise dans la  bdd test
  return (
    <div className="flex w-full  ">
      <Navbar />
      <div>
        {user.entity_category_id === 1 && <SchoolProgressStep />}

        {user.entity_category_id === 2 && <CompanyProgressStep />}
      </div>
    </div>
  );
}

export default Submission;
