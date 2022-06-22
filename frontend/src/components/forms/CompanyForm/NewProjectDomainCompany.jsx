import React from "react";

import industries from "../../../assets/dataset/industries.json";

export default function NewProjectDomainCompany() {
  return (
    <div className="bg-gray-100 p-10 flex flex-wrap justify-around flex-col">
      <form className="p-2">
        <h2 className="text-base">Quel est le domaine de votre projet ? *</h2>
        <p className="p-5 font-extralight text-s">
          Choisissez 5 catégories maximum qui correspondent le mieux à votre
          projet.
        </p>
        <div className="inline-block relative m-2">
          <select className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {industries.map((d) => (
              <option>{d.industry}</option>
            ))}
          </select>
        </div>
        <div />
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
