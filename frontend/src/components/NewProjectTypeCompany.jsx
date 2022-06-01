import React from "react";

export default function NewProjectTypeCompany() {
  return (
    <div className="bg-stone-200 m-10 p-10 flex justify-around flex-col rounded-md">
      <div className="">
        <h2 className="text-lg font-semibold">
          Quel est le type de votre projet ? *
        </h2>
        <div className="flex m-5 bg-white border-black rounded-md">
          <input
            className="m-5 flex-initial w-16"
            type="radio"
            name="consulting"
          />
          <h3 className="font-normal text-gray-400">
            Consulting : proposez une mission propre à votre entreprise et
            bénificier d’un renfort temporaire.
          </h3>
        </div>
        <div className="flex m-5 bg-white border-black rounded-md">
          <input
            className="m-5 flex-initial w-16"
            type="radio"
            name="recruitment"
          />
          <h3 className="font-normal text-gray-400">
            {" "}
            Recruitement : proposez une mission pour trouvez les talents qu’il
            vous faut.
          </h3>
        </div>

        <div className="flex m-5 bg-white border-black rounded-md">
          <input
            className="m-5 flex-initial w-16"
            type="radio"
            name="branding"
          />
          <h3 className="font-normal text-gray-400">
            Branding : proposez une mission pour promouvoir votre marque auprès
            des étudiants.
          </h3>
        </div>
      </div>
      <div className="">
        <h2 className="text-lg font-semibold">
          Quand peut s&apos;achever le projet au plus tard ? *
        </h2>
        <input
          className="flex m-5 bg-white border-black rounded-md"
          type="date"
        />
      </div>
      <div className="ml-80">
        <button
          type="button"
          className="text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Suivant{" "}
        </button>
      </div>
    </div>
  );
}
