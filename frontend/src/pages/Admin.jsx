import React, { useState, useEffect } from "react";
import axios from "axios";

import UsersTable from "../components/admin/UsersTable";
import ProjectsTable from "../components/admin/ProjectsTable";

function Admin() {
  const [users, setUsers] = useState();
  const [stages, setStages] = useState();
  const [sectors, setSectors] = useState();
  const [companyProject, setCompanyProject] = useState();
  const [schoolRessources, setSchoolRessources] = useState();
  const [menuSwitch, setMenuSwitch] = useState(true);
  const [change, setChange] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stages/`)
      .then((res) => setStages(res.data))
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sectors/`)
      .then((res) => setSectors(res.data))
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/company-projects/`)
      .then((res) => setCompanyProject(res.data))
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/school-ressources/`)
      .then((res) => setSchoolRessources(res.data))
      .catch((err) => console.warn(err));
  }, [change]);

  return (
    <div className="bg-gray-100 h-screen w-full">
      <div className="bg-emerald-700 h-30" id="navbar">
        <div className="flex text-white p-10 font-bold text-3xl sticky">
          <div className="bg-green-400 px-3 py-1 rounded-lg">R</div>
          <h1 className="px-3 py-1">Admin page</h1>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setMenuSwitch(!menuSwitch)}
          className={`text-white text-xl font-bold m-4 rounded-lg px-4 py-2 shadow-md hover:bg-emerald-700 ${
            menuSwitch ? "bg-emerald-700" : "bg-green-400"
          }`}
        >
          Utilisateurs
        </button>
        <button
          type="button"
          onClick={() => setMenuSwitch(!menuSwitch)}
          className={`text-white text-xl font-bold m-4 rounded-lg px-4 py-2 shadow-md hover:bg-emerald-700 ${
            !menuSwitch ? "bg-emerald-700" : "bg-green-400"
          }`}
        >
          Projets
        </button>
      </div>

      <div className="flex flex-col m-5" id="admin-tables">
        {users && menuSwitch && <UsersTable users={users} />}
        {companyProject && !menuSwitch && (
          <ProjectsTable
            companyProject={companyProject}
            sectors={sectors}
            stages={stages}
            users={users}
            schoolRessources={schoolRessources}
            setChange={setChange}
            change={change}
          />
        )}
      </div>
    </div>
  );
}
export default Admin;
