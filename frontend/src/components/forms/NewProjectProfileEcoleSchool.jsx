/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import range from "../../assets/dataset/workforce.json";
import industries from "../../assets/dataset/industries.json";
import SelectDepartment from "../SelectDepartment";
import SelectCity from "../SelectCity";

export default function NewProjectProfileEcoleSchool() {
  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form>
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-wrap flex-col p-2">
            <h2 className="text-base p-2">Taille de l’entreprise idéale</h2>
            <div className="p-2 flex flex-col">
              <select className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {range.map((d) => (
                  <option>{d.range}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-base p-2">
              Industrie qui correspondrait au cours
            </h2>
            <div className="p-2 flex flex-col">
              <select className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {industries.map((d) => (
                  <option>{d.industry}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mb-5 p-2">
            <div className="p-2 flex flex-row justify-evenly">
              <label htmlFor="campus">
                <h2 className="text-base p-2">
                  Localisation de l&apos;entreprise
                </h2>
                <SelectDepartment />
                <SelectCity />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base p-2">
            Collaboration en distanciel possible ?
          </h2>
          <div className="p-2 flex flex-col">
            <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Oui</option>
              <option>Non</option>
              <option>Partiellement</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base p-2">Engagement de l’entreprise ? *</h2>
          <div className="flex m-5 ">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="2"
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
      </form>
    </div>
  );
}
