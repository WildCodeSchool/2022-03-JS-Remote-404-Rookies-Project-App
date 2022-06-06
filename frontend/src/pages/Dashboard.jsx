import React from "react";
import Navbar from "../components/Navbar";
import User from "../components/User";
import Entity from "../components/Entity";
import MyProjects from "../components/MyProjects";

import users from "../assets/dataset/users.json";

function Dashboard() {
  const user = users[2];

  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col w-full">
        <User user={user} />
        <Entity user={user} />
        <MyProjects />
      </div>
    </div>
  );
}

export default Dashboard;
