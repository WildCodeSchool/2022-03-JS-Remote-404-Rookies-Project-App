import React from "react";

import User from "../components/Dashboard/User";
import Entity from "../components/Dashboard/Entity";
import MyProjects from "../components/Dashboard/MyProjects";

import users from "../assets/dataset/users.json";

function Dashboard() {
  const user = users[2];

  return (
    <div className="flex flex-col w-full">
      <User user={user} />
      <Entity user={user} />
      <MyProjects user={user} />
    </div>
  );
}

export default Dashboard;
