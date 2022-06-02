import React from "react";

export default function NewProjectDescriptionCompany() {
  return (
    <div className="bg-stone-200 m-10 p-10 flex justify-around flex-col rounded-md">
      <div>
        <h2 className="text-lg font-semibold">Nom du projet ? *</h2>
        <div className="flex m-5 bg-white border border-black rounded-md">
          <input
            className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            name="project_name"
            placeholder="Projet étude de marché (Allemagne)"
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">
          Quel est votre objectif principal ? *
        </h2>
        <p className="p-5 font-extralight text-xs">
          Décrivez le problème que les étudiants devront solutionner et le
          résultat attendu des étudiants.
        </p>
        <div className="flex m-5 bg-white border border-black rounded-md">
          <input
            className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            name="project_name"
            placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">
          Quelles seront les ressources disponibles pour les étudiants ? *
        </h2>
        <p className="p-5 font-extralight text-xs">
          Décrivez les ressources que vous pourrait mettre à disposition (temps
          disponible, accès aux outils internes, documents utiles, membre de
          l’équipe disponible).
        </p>
        <div className="flex m-5 bg-white border border-black rounded-md">
          <input
            className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            name="project_name"
            placeholder="Et fugit soluta dolorem ratione et quia minus eum unde voluptas ad autem dolor. Non ipsam adipisci sit dolores accusamus non voluptatem enim. Qui quia tenetur et odit quia vel maiores nemo aut voluptatum tenetur et minus laboriosam.

          Aut nostrum odio ea iure obcaecati aut reiciendis dignissimos qui mollitia labore est quia dolore. Id magnam incidunt hic rerum ipsum est placeat."
          />
        </div>
      </div>

      <div className="ml-80 flex flex-row">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Back
        </button>
        <button
          type="button"
          className="text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Suivant{" "}
        </button>
      </div>
    </div>
  );
}
