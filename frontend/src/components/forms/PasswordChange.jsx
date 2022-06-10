/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function PasswordChange() {
  return (
    <div className="border-b-2 p-2 bg-gray-100">
      <h2 className="text-base p-2">Changer mon mot de passe</h2>
      <form className="flex flex-wrap  items-baseline justify-stretch m-2 p-2">
        <label htmlFor="upload">Mot de passe actuel *</label>
        <input
          className=" p-2"
          required
          type="text"
          placeholder="Mot de passe actuel"
          name="user_mdp_upload"
        />
        <label htmlFor="new">Nouveau mot de passe *</label>
        <input
          className=" p-2"
          required
          type="text"
          placeholder="Nouveau mot de passe"
          name="user_mdp_new"
        />
        <label htmlFor="confirm">Confirmer le mot de passe *</label>
        <input
          className=" p-2"
          required
          type="text"
          placeholder="Confirmer le mot de passe"
          name="user_confirm"
        />
      </form>
      <div className=" flex items-center justify-center m-1">
        <button
          type="button"
          className="  text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default PasswordChange;
