import React from "react";
import industries from "../../assets/dataset/industries.json";

export default function NewProjectDomainCompany() {
  return (
    <div className="bg-gray-100 p-10 flex flex-wrap justify-around flex-col">
      <form>
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
      </form>
    </div>
  );
}
