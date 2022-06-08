import React from "react";

export default function NewProjectDomainCompany() {
  return (
    <div className="bg-stone-200 m-10 p-10 flex justify-around flex-col rounded-md">
      <h2 className="text-lg font-semibold">
        Quel est le domaine de votre projet ? *
      </h2>
      <p className="p-5 font-extralight text-s">
        Choisissez 5 catégories maximum qui correspondent le mieux à votre
        projet.
      </p>
      <div className="inline-block relative m-5 bg-white border border-black rounded-md">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Domaine 1</option>
          <option>Domaine 2</option>
          <option>Domaine 3</option>
          <option>Domaine 4</option>
          <option>Domaine 5</option>
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
      <div />
    </div>
  );
}
