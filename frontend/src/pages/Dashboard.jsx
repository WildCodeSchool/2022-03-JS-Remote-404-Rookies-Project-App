import React, { useContext, useEffect } from "react";
import axios from "axios";
import ExportContextUser from "../contexts/UserContext";

import Entity from "../components/Dashboard/Entity";
import MyProjects from "../components/Dashboard/MyProjects";
import UserSettings from "../components/Dashboard/UserSettings";

function Dashboard() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}`)
      .then((res) => handleUser(res.data))
      .catch((err) => console.warn(err));
  }, []);

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
