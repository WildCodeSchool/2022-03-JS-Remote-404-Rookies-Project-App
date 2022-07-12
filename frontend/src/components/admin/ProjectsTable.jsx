import React from "react";
import axios from "axios";

function ProjectsTable({
  stages,
  companyProject,
  users,
  schoolRessources,
  change,
  setChange,
}) {
  const projects = [...companyProject, ...schoolRessources];

  const handleMatchChange = (e, p) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/company-projects/match/${e}/${p}`
      )
      .then(() => setChange(!change))
      .catch((err) => console.warn(err));
  };

  const handleStageChange = (e, p, course) => {
    if (course) {
      axios
        .put(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/school-ressources/stages/${e}/${p}`
        )
        .then(() => setChange(!change))
        .catch((err) => console.warn(err));
    } else {
      axios
        .put(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/company-projects/stages/${e}/${p}`
        )
        .then(() => setChange(!change))
        .catch((err) => console.warn(err));
    }
  };

  return (
    <div className="flex flex-col p-5" id="project-table">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
        <table className="w-full text-sm text-left table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/10">
                Id
              </th>
              <th scope="col" className="px-6 py-3 w-1/10">
                Date de soumission
              </th>
              <th scope="col" className="px-6 py-3 w-1/10">
                Utilisateur
              </th>
              <th scope="col" className="px-6 py-3 w-1/10">
                Type
              </th>
              <th scope="col" className="px-6 py-3 w-2/10">
                Nom du projet
              </th>
              <th scope="col" className="px-6 py-3 w-1/10">
                Domaine/Tag
              </th>
              <th scope="col" className="px-6 py-3 w-2/10">
                Matching
              </th>
              <th scope="col" className="px-6 py-3 w-2/10">
                Match
              </th>
              <th scope="col" className="px-6 py-3 w-1/10">
                Changer le statut
              </th>
              <th scope="col" className="px-6 py-3 w-1/10">
                Statut projet
              </th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((p) => (
                <tr
                  key={p.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-4">{p.id}</td>
                  <td className="px-4 py-4">{p.create_time}</td>
                  <td className="px-4 py-4">
                    {
                      users.find(
                        (user) => parseInt(user.id, 10) === p.profiles_id
                      )?.firstname
                    }{" "}
                    {
                      users.find(
                        (user) => parseInt(user.id, 10) === p.profiles_id
                      )?.lastname
                    }
                  </td>
                  <td className="px-4 py-4">
                    {p.course ? "Ecole" : "Entreprise"}
                  </td>
                  <td className="px-4 py-4">
                    {p.project_name ? p.project_name : p.course}
                  </td>
                  <td className="px-4 py-4">To define</td>
                  <td className="px-4 py-4">
                    <select
                      className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => handleMatchChange(e.target.value, p.id)}
                      defaultValue="Choisir un projet d'école"
                    >
                      <option key="default" value={null}>
                        Choisir un cours
                      </option>
                      {schoolRessources.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.course}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    {p.school_ressources_id &&
                      schoolRessources.find(
                        (e) => p.school_ressources_id === e.id
                      ).course}
                    {!p.school_ressources_id && "Pas de match"}
                  </td>
                  <select
                    className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) =>
                      handleStageChange(e.target.value, p.id, p.course)
                    }
                    defaultValue="Choisir un statut"
                  >
                    <option key="default" value={null}>
                      Choisir un statut
                    </option>
                    {stages.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.stage}
                      </option>
                    ))}
                  </select>
                  <td className="px-4 py-4">
                    {stages.find((e) => e.id === p.stages_id).stage}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsTable;
