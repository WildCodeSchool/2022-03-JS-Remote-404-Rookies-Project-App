import React from "react";
import levels from "../../assets/dataset/student_levels.json";
import schools from "../../assets/dataset/schools.json";

function NewProjectOrganisationSchool() {
  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form className="flex flex-row flex-wrap">
        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">Votre école *</h2>

          <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {schools.map((d) => (
              <option>{d.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">Nom de votre cours *</h2>

          <input
            className="required form-control
          flex
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
            placeholder="Management International"
          />
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">Formation ? *</h2>
          <input
            className="required form-control
                flex
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
            placeholder="Master Commerce International"
          />
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">Niveau des étudiants ? *</h2>
          <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {levels.map((d) => (
              <option>{d.level}</option>
            ))}
          </select>
        </div>

        {/* A MAPPER SUR VILLES DE FRANCE OU API */}
        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">Campus concerné ? *</h2>
          <select className=" bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Campus 1</option>
            <option>Campus 2</option>
            <option>Campus 3</option>
          </select>
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">
            Combien d’étudiants seront disponibles dans votre cours ? *
          </h2>
          <p className="p-2 font-extralight text-xs">
            Donnez votre meilleure estimation du nombre total des étudiants
            participant au cours
          </p>
          <input
            className="required form-control
          block
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
            placeholder="40"
          />
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">
            Comment travailleront les étudiants ? *
          </h2>

          <button
            type="submit"
            formMethod="PUT"
            className="p-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Individuellement
          </button>
          <button
            type="submit"
            formMethod="PUT"
            className="p-2 focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            En groupe
          </button>
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">
            Nombre de groupes par entreprise ? *
          </h2>

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
            placeholder="2 groupes"
          />
        </div>

        <div className="flex flex-row justify-evenly m-2">
          <div className="flex-flex-row ">
            <h2 className="text-base p-2">Nombre d’étudiants par entreprise</h2>
            <button
              type="submit"
              formMethod="PUT"
              className="flex justify-center text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              8
            </button>
          </div>
          <div className="flex-flex-row ">
            <h2 className="text-base p-2">Nombre d’entreprises</h2>
            <button
              type="submit"
              formMethod="PUT"
              className="flex justify-center text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              5
            </button>
          </div>
        </div>

        <div className="flex flex-wrap p-2">
          <h2 className="text-base p-2">
            Combien d’heures par semaine approximativement vont être allouées
            par étudiant ? *
          </h2>
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
            placeholder="8h par semaine"
          />
        </div>
      </form>
    </div>
  );
}
export default NewProjectOrganisationSchool;
