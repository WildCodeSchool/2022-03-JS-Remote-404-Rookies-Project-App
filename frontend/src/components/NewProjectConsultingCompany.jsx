import React from "react";

export default function NewProjectConsultingCompany() {
  return (
    <div className="bg-stone-200 m-10 p-10 flex justify-around flex-col rounded-md">
      <h2 className="text-lg font-semibold">Le nom de votre entreprise *</h2>
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
          placeholder="Entreprise SAS"
        />
      </div>

      {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
      {/* <input type="file" id="photo">Logo</input> */}

      <h2 className="text-lg font-semibold">
        Description de l&apos;entreprise*
      </h2>
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
          placeholder="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
        />
      </div>

      <div className="flex">
        <h2 className="text-lg font-semibold">Industrie</h2>
        <div className="inline-block relative m-5 w-64 bg-white border border-black rounded-md">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Industrie 1</option>
            <option>Industrie 2</option>
            <option>Industrie 3</option>
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
        <h2 className="text-lg font-semibold">Site web</h2>
        <div className="flex m-5 w-64 bg-white border border-black rounded-md">
          <input
            className="form-control
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
            placeholder="www.entreprise.com"
          />
        </div>
      </div>

      <div className="flex">
        <h2 className="text-lg font-semibold">
          Localisation de l&apos;entreprise
        </h2>
        <div className="flex m-5 w-64 bg-white border border-black rounded-md">
          <input
            className="form-control
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
            placeholder="Paris"
          />
        </div>
        <h2 className="text-lg font-semibold">Effectif de l&apos;entreprise</h2>
        <div className="inline-block relative m-5 w-64 bg-white border border-black rounded-md">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Effectif 1</option>
            <option>Effectif 2</option>
            <option>Effectif 3</option>
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
    </div>
  );
}
