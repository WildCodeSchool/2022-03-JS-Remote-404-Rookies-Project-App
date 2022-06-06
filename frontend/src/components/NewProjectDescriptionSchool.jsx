import React from "react";

export default function NewProjectDescriptionSchool() {
  return (
    <div className="bg-stone-200 m-10 p-10 w-full flex justify-around flex-col rounded-md">
      <div>
        <h2 className="text-lg font-semibold">Décrivez votre projet *</h2>
        <p className="p-5 font-extralight text-xs">
          Quels sont les objectifs pédagogiques du projet ? *
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
            type="text"
            name="project_goals"
            placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
          />
        </div>
      </div>
      <div>
        <p className="p-5 font-extralight text-xs">
          Quels exemples de missions seraient compatibles avec vos enjeux
          universitaire ? *
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
            type="text"
            name="project_missions"
            placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
          />
        </div>
      </div>
    </div>
  );
}
