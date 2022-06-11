import React from "react";

export default function NewProjectDescriptionSchool() {
  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form>
        <div>
          <h2 className="text-base">Décrivez votre projet *</h2>
          <p className="p-2 font-extralight text-s">
            Quels sont les objectifs pédagogiques du projet ? *
          </p>
          <div className="flex flex-wrap m-2">
            <textarea
              className="required form-control
              w-1/2 "
              type="text"
              rows="2"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
            />
          </div>
        </div>
        <div>
          <p className="p-2 font-extralight text-s">
            Quels exemples de missions seraient compatibles avec vos enjeux
            universitaire ? *
          </p>
          <div className="flex flex-wrap m-2">
            <textarea
              className="required form-control
              w-1/2 "
              type="text"
              rows="2"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
            />
          </div>
        </div>
      </form>
    </div>
  );
}
