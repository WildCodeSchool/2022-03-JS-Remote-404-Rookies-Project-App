import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState();
  const [stages, setStages] = useState();
  const [sectors, setSectors] = useState();
  const [companyProject, setCompanyProject] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.warn(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/stages/`)
      .then((res) => setStages(res.data))
      .catch((err) => console.warn(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sectors/`)
      .then((res) => setSectors(res.data))
      .catch((err) => console.warn(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/company_project/`)
      .then((res) => setCompanyProject(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="bg-gray-100 h-full w-full">
      <div className="bg-emerald-700 h-20" id="navbar">
        <div className="flex text-white m-10 font-bold text-3xl">
          <div className="bg-green-400 px-3 py-1 rounded-lg">R</div>
          <h1 className="px-3 py-1">Projects</h1>
        </div>
      </div>
      <div className="flex flex-col m-5" id="admin-tables">
        <div className="flex flex-col p-5" id="user-table">
          <h1>UTILISATEURS</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left table-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Prénom
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nom
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Téléphone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Identifiant
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Catégorie (école ou entreprise)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Profession
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date création profil
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    {/* PRENOM */}
                    <td className="px-6 py-4">{u.firstname}</td>
                    {/* NOM */}
                    <td className="px-6 py-4">{u.lastname}</td>
                    {/* EMAIL */}
                    <td className="px-6 py-4">{u.email}</td>
                    {/* TELEPHONE */}
                    <td className="px-6 py-4">
                      {u.phone ? u.phone : "Pas de téléphone"}
                    </td>
                    {/* IDENTIFIANT */}
                    <td className="px-6 py-4">{u.id}</td>
                    {/* CATEGORIE ENTREPRISE OU ECOLE */}
                    <td className="px-6 py-4">{u.entity_category_id}</td>
                    {/* PROFESSION */}
                    <td className="px-6 py-4">
                      {u.role ? u.role : "Pas de profession"}
                    </td>
                    {/* DATE DE CREATION DE PROFIL */}
                    <td className="px-6 py-4">
                      {u.create_time ? u.create_time : "pas de date"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col p-5" id="project-table">
          <h1>PROJETS</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left table-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date de soumission
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Entreprise/Ecole
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Utilisateur
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nom du projet
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Domaine/Tag
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Match accepté par entreprise
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Match accepté par école
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Statut projet
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  {/* DATE DE SOUMISSION */}
                  {companyProject.map((p) => (
                    <td className="px-4 py-4">{p.create_time}</td>
                  ))}
                  {/* CATEGORIE ENTREPRISE OU ECOLE */}
                  {users.map((u) => (
                    <td className="px-4 py-4">{u.entity_category_id}</td>
                  ))}
                  {/* UTILISATEUR */}
                  {users.map((u) => (
                    <td className="px-4 py-4">{u.id}</td>
                  ))}
                  {/* TYPE */}
                  {sectors.map((sc) => (
                    <td className="px-4 py-4">
                      {sc.sectors ? sc.sectors : "Type de projet non renseigné"}
                    </td>
                  ))}
                  {/* NOM DU PROJET */}
                  {companyProject.map((p) => (
                    <td className="px-4 py-4">{p.project_name}</td>
                  ))}
                  {/* DOMAINE/TAG  */}
                  {companyProject.map((p) => (
                    <td className="px-4 py-4"> {p.project_types_id}</td>
                  ))}
                  {/* MATCH ACCEPTE PAR L'ENTREPRISE */}
                  <td className="px-4 py-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-emerald-700 bg-gray-100 rounded border-gray-300 focus:ring-emerald-700 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </td>
                  {/* MATCH ACCEPTE PAR L'ECOLE */}
                  <td className="px-4 py-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-emerald-700 bg-gray-100 rounded border-gray-300 focus:ring-emerald-700 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </td>
                  {/* STATUT DU PROJET */}
                  {stages.map((st) => (
                    <td className="px-4 py-4">
                      {st.stage ? st.stage : "Statut non renseigné"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
