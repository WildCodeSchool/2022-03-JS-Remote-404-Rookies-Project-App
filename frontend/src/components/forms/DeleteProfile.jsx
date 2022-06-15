/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function DeleteProfile() {
  return (
    <div className=" border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 mb-5">
      <h2 className="text-base p-5">Supprimer mon compte</h2>
      <form className="flex items-center justify-around m-5">
        <h3 className="text-m p-1 text-red-600">
          Attention, une fois votre compte supprimé, vous ne pourrez plus
          retourner en arrière
        </h3>
        <button
          type="button"
          className="  text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Supprimer
        </button>
      </form>
    </div>
  );
}

export default DeleteProfile;
