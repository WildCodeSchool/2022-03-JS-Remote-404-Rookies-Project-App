import React from "react";

function UsersTable({ users }) {
  return (
    <div className="flex flex-col p-5" id="user-table">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
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
            {users &&
              users.map((u) => (
                <tr
                  key={u.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
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
                  <td className="px-6 py-4">
                    {u.entity_category_id === 1 ? "Entreprise" : "Ecole"}
                  </td>
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
  );
}

export default UsersTable;
