import React from "react";

import fields from "../../assets/dataset/teaching_fields.json";
import languages from "../../assets/dataset/languages.json";

export default function NewProjectDomainSchool() {
  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form className="p-2">
        <div>
          <h2 className="text-base p-1">
            Quel est le domaine de votre projet ? *
          </h2>
          <p className="p-5 font-extralight text-s">
            Choisissez 5 catégories maximum qui correspondent le mieux à votre
            projet
          </p>
          <div className="p-5">
            <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {fields.map((d) => (
                <option>{d.field}</option>
              ))}
            </select>
          </div>
          <div />
        </div>

        <div>
          <h2 className="text-base p-1">
            Quelles sont les langues disponibles ? *
          </h2>
          <p className="p-5 font-extralight text-s">
            Quelles sera la/les langues utlisées lors du projet ?
          </p>
          <div className="p-5">
            <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {languages.map((d) => (
                <option>{d.language}</option>
              ))}
            </select>
          </div>
          <div />
        </div>
        <div className=" flex items-center justify-center">
          <button
            type="submit"
            formMethod="PUT"
            className="  text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
}
