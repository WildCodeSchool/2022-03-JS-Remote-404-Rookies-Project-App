import React from "react";

export default function NewProjectDescriptionCompany() {
  return (
    <div className="border-b-2 flex flex-col flex-wrap w-full">
      <form>
        <div>
          <h2 className="text-base p-2">Nom du projet ? *</h2>
          <div className="flex flex-wrap m-2">
            <input
              className="required form-control
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
              placeholder="Projet étude de marché (Allemagne)"
            />
          </div>
        </div>

        <div>
          <h2 className="text-base p-2">
            Quel est votre objectif principal ? *
          </h2>
          <p className="p-2 font-extralight text-s">
            Décrivez le problème que les étudiants devront solutionner et le
            résultat attendu des étudiants.
          </p>
          <div className="flex flex-wrap m-2">
            <textarea
              className="required form-control
              w-1/2 "
              type="text"
              rows="2"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
            />
          </div>
        </div>

        <div>
          <h2 className="text-base p-2">
            Quelles seront les ressources disponibles pour les étudiants ? *
          </h2>
          <p className="p-2 font-extralight text-s">
            Décrivez les ressources que vous pourrait mettre à disposition
            (temps disponible, accès aux outils internes, documents utiles,
            membre de l’équipe disponible).
          </p>
          <div className="flex flex-wrap m-2">
            <textarea
              className="required form-control
              w-1/2 "
              type="text"
              rows="2"
              placeholder="Et fugit soluta dolorem ratione et quia minus eum unde voluptas ad autem dolor. Non ipsam adipisci sit dolores accusamus non voluptatem enim. Qui quia tenetur et odit quia vel maiores nemo aut voluptatum tenetur et minus laboriosam.

          Aut nostrum odio ea iure obcaecati aut reiciendis dignissimos qui mollitia labore est quia dolore. Id magnam incidunt hic rerum ipsum est placeat."
            />
          </div>
        </div>
      </form>
    </div>
  );
}
