import React from "react";

export default function NewProjectDatesClésSchool() {
  return (
    <div className="bg-gray-100 p-10 flex justify-around flex-col flex-wrap">
      <div>
        <h2 className="text-base">Organisez les dates clés *</h2>
        <p className="p-5 font-extralight text-s">
          Date limite de soumission du projet par l’entreprise *
        </p>
        <div className="flex m-10 bg-white border border-black rounded-md">
          <input
            className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="date"
            name="project_missions"
            placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
          />
        </div>
        <div>
          <p className="p-5 font-extralight text-s">
            Date du lancement du projet *
          </p>
          <div className="flex flex-wrap m-10 bg-white border border-black rounded-md">
            <input
              className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
              type="date"
              name="date_lancement"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col m-10 bg-stone-100 border border-black rounded-md">
          <p className="p-5 font-extralight text-s">Ajouter une étape</p>
          <div className="flex flex-row">
            <div className="flex m-10 bg-white border border-black rounded-md">
              <input
                className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
                type="date"
                name="date"
                placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
              />
            </div>
            <div className="flex flex-wrap m-10 bg-white border border-black rounded-md">
              <input
                className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
                type="text"
                name="note_cadrage"
                placeholder="Établir une note de cadrage du projet avec l’entreprise"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="flex justify-center ml-80 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Supprimer
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="ml-10 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Ajouter
          </button>
        </div>

        <div>
          <p className="p-5 font-extralight text-s">
            Date du clôture du projet *
          </p>
          <div className="flex flex-wrap m-10 bg-white border border-black rounded-md">
            <input
              className="required form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
              type="date"
              name="date_fin"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
