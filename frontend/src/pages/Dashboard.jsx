import React, { useContext } from "react";
import ExportContextUser from "../contexts/UserContext";

import Entity from "../components/Dashboard/Entity";
import MyProjects from "../components/Dashboard/MyProjects";
import UserSettings from "../components/Dashboard/UserSettings";

function Dashboard() {
  const { user } = useContext(ExportContextUser.UserContext);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="self-end mt-5 mr-10">
        <UserSettings />
      </div>
      <Entity user={user} />
      <MyProjects user={user} />
    </div>
  );
}

export default Dashboard;
