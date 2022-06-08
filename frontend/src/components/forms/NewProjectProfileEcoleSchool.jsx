import React from "react";

export default function NewProjectProfileEcoleSchool() {
  return (
    <div className="bg-gray-100 m-10 p-10 flex justify-around flex-col rounded-md">
      <div className="flex flex-row ">
        <div className="flex flex-col mr-40 w-96">
          <h2 className="text-lg font-semibold">
            Taille de l’entreprise idéale
          </h2>
          <div className="inline-block relative w-full m-5 bg-white border border-black rounded-md">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Taille 1</option>
              <option>Taille 2</option>
              <option>Taille 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mr-10 ml-26 w-96">
          <h2 className="text-lg font-semibold">
            Industrie qui correspondrait au cours
          </h2>
          <div className="flex m-5 w-64 bg-white border border-black rounded-md">
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
              name="industry"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mr-10">
          <h2 className="text-lg font-semibold">
            Localisation de l’entreprise idéale
          </h2>
          <div className="flex m-5 w-full bg-white border border-black rounded-md">
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
              name="industry"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">
          Collaboration en distanciel possible ?
        </h2>
        <div className="inline-block relative w-full m-5 bg-white border border-black rounded-md">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Réponse 1</option>
            <option>Réponse 2</option>
            <option>Réponse 3 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">
          Engagement de l’entreprise ? *
        </h2>
        <div className="flex m-5 bg-white border border-black rounded-md">
          <input
            className="required form-control
          block
          w-full
          h-28
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
            name="engagements"
            placeholder="Compléter le cahier des charges,
            Orienter le travail des étudiants, en exigeant d’eux le comportement
            de professionnels,
            Mettre à disposition de l’équipe les informations nécessaires à la
            réussite de la mission,
            Prendre en charge les frais inhérents à la mission (frais de
            déplacements, hébergement et matériels si nécessaire),
            Évaluer l’implication, le comportement et le travail de chaque
            étudiant de l’équipe,
            Participer au lancement et au jury final de la mission."
          />
        </div>
      </div>
    </div>
  );
}
