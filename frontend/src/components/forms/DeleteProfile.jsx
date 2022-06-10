/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function DeleteProfile() {
  return (
    <div className=" flex-col p-2 bg-gray-100 ">
      <h2 className="text-base p-2">Supprimer mon compte</h2>
      <form className="flex  items-center justify-center">
        <input
          className=" w-full p-2"
          type="text"
          placeholder="Attention, une fois votre compte supprimé, vous ne pourrez plus retourner en arrière"
          name="user_delete"
        />
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
