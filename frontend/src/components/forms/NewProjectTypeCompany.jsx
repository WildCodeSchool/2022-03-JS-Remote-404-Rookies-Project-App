import React from "react";

export default function NewProjectTypeCompany() {
  return (
    <div className="bg-gray-100 p-10 flex flex-wrap justify-around flex-col">
      <div className="">
        <h2 className="text-base">Quel est le type de votre projet ? *</h2>
        <div className="flex flex-wrap m-5 bg-white border border-black rounded-md">
          <input
            className=" required m-5 flex-initial w-16"
            type="radio"
            name="consulting"
          />
          <h3 className="font-normal text-gray-400">
            Consulting : proposez une mission propre à votre entreprise et
            bénificier d’un renfort temporaire.
          </h3>
        </div>
        <div className="flex m-5 bg-white border border-black rounded-md">
          <input
            className="required m-5 flex-initial w-16"
            type="radio"
            name="recruitment"
          />
          <h3 className="font-normal text-gray-400">
            {" "}
            Recruitement : proposez une mission pour trouvez les talents qu’il
            vous faut.
          </h3>
        </div>

        <div className="flex m-5 bg-white border border-black rounded-md">
          <input
            className="required m-5 flex-initial w-16"
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
        <h2 className="text-base">
          Quand peut s&apos;achever le projet au plus tard ? *
        </h2>
        <input
          className="required flex m-5 bg-white border border-black rounded-md"
          type="date"
        />
      </div>
    </div>
  );
}
