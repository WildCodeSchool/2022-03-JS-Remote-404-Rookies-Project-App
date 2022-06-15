import React, { useContext } from "react";
import ExportContext from "../contexts/UserContext";

import User from "../components/Dashboard/User";
import Entity from "../components/Dashboard/Entity";
import MyProjects from "../components/Dashboard/MyProjects";

function Dashboard() {
  const { user } = useContext(ExportContext.UserContext);

  return (
    <div className="flex flex-col w-full">
      <User user={user} />
      <Entity user={user} />
      <MyProjects user={user} />
    </div>
  );
}

export default Dashboard;
