import React from "react";

function NewProjectOrganisationSchool() {
  return (
    <div className="bg-stone-200 m-10 p-10 flex justify-around flex-col rounded-md w-full">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Votre école *</h2>
        <div className="inline-block relative w-full m-5 bg-white border border-black rounded-md">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Ecole 1</option>
            <option>Ecole 2</option>
            <option>Ecole 3</option>
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
        <h2 className="text-lg font-semibold">Nom de votre cours *</h2>
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
            name="course_name"
            placeholder="Management International"
          />
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="mr-10">
          <h2 className="text-lg font-semibold">Formation ? *</h2>
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
              name="course_name"
              placeholder="Master Commerce International"
            />
          </div>
        </div>

        <div className="flex flex-col mr-40">
          <h2 className="text-lg font-semibold">Niveau des étudiants ? *</h2>
          <div className="inline-block relative w-full m-5 bg-white border border-black rounded-md">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Niveau 1</option>
              <option>Niveau 2</option>
              <option>Niveau 3</option>
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
      <h2 className="text-lg font-semibold">Campus concerné ? *</h2>
      <div className="inline-block relative w-64 m-5 bg-white border border-black rounded-md">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Campus 1</option>
          <option>Campus 2</option>
          <option>Campus 3</option>
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

      <div>
        <h2 className="text-lg font-semibold">
          Combien d’étudiants seront disponibles dans votre cours ? *
        </h2>
        <p className="p-5 font-extralight text-xs">
          Donnez votre meilleure estimation du nombre total des étudiants
          participant au cours
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
            name="nb-students"
            placeholder="40"
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">
          Comment travailleront les étudiants ? *
        </h2>
        <div className="flex flex-row m-5">
          <button
            type="button"
            className="p-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Individuellement
          </button>
          <button
            type="button"
            className="p-5 focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            En groupe
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">
            Combien d’étudiants seront disponibles dans votre cours ? *
          </h2>

          <input
            className="required form-control
          flex
          w-64
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-black
          rounded
          transition
          ease-in-out
          m-5
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            name="nb-students"
            placeholder="40"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">
          Nombre de groupes par entreprise ? *
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
            name="course_name"
            placeholder="2 groupes"
          />
        </div>
      </div>

      <div className="flex flex-row m-5">
        <div className="flex flex-row">
          <h2 className="text-l font-semibold mr-10 ">
            Nombre d’étudiants par entreprise{" "}
          </h2>
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            8
          </button>
        </div>
        <div className="flex flex-row">
          <h2 className="text-l font-semibold mr-10">Nombre d’entreprises</h2>
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            5
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">
          Combien d’heures par semaine approximativement vont être allouées par
          étudiant ? *
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
            name="course_name"
            placeholder="8h par semaine"
          />
        </div>
      </div>
    </div>
  );
}
export default NewProjectOrganisationSchool;
