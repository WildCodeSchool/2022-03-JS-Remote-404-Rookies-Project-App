/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function DeleteProfile() {
  return (
    <div className=" flex-col p-2 bg-gray-100 ">
      <h2 className="text-base p-1">Supprimer mon compte</h2>
      <form className="flex  items-center justify-center">
        <h3 className="text-xs p-1 text-red-600">
          Attention, une fois votre compte supprimé, vous ne pourrez plus
          retourner en arrière
        </h3>
        <button
          type="button"
          className=" m-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Supprimer
        </button>
      </form>
    </div>
  );
}

export default DeleteProfile;
