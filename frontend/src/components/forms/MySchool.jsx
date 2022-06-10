/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import fields from "../../assets/dataset/teaching_fields.json";

function MySchool() {
  return (
    <div className="border-b-2 flex flex-col flex-wrap p-2 w-full">
      <h2 className="text-base p-2">Mon école</h2>
      <form>
        <label htmlFor="school">Le nom de votre école *</label>
        <input
          className="flex flex-row flex-wrap p-2"
          required
          type="text"
          placeholder="Le nom de votre école"
          name="user_school"
        />
        {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
        {/* <input type="file" id="logo">Logo</input> */}
        <label htmlFor="descr">Description de votre école</label>
        <textarea
          className="flex flex-col flex-wrap p-2"
          type="text"
          rows="5"
          placeholder="Description de votre école"
          name="user_school_descr"
        />
        <label htmlFor="domain">Domaines d&apos;enseignement</label>
        <select className="flex flex-col flex-wrap" name="user_domain">
          {/* A MAPPER AVEC DOMAINES ETUDES */}
          {fields.map((d) => (
            <option>{d.field}</option>
          ))}
        </select>
        <label htmlFor="campus">Localisation des campus</label>
        <select className="flex flex-col flex-wrap" name="user_campus">
          {/* A MAPPER AVEC DONNEES VILLES DE FRANCE */}
          <option value="lieu 1">Lieu 1</option>
          <option value="lieu 2">Lieu 2</option>
          <option value="lieu 3">Lieu 3</option>
        </select>
        <label htmlFor="web">Site web</label>
        <input
          className="flex flex-row flex-wrap p-2"
          type="text"
          placeholder="Site web"
          name="user_web"
        />
        <button
          type="button"
          className="flex flex-col flex-wrap m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
}

export default MySchool;
