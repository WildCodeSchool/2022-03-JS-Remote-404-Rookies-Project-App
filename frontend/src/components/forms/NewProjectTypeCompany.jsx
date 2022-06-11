import React from "react";

export default function NewProjectTypeCompany() {
  return (
    <div className="border-b-2 flex flex-col flex-wrap w-full">
      <form>
        <div>
          <h2 className="text-base p-2">
            Quel est le type de votre projet ? *
          </h2>
          <div className="flex m-5">
            <input
              className=" 
            required m-5 flex-initial w-16"
              type="radio"
            />
            <h3 className="font-normal text-black p-2">
              Consulting : proposez une mission propre à votre entreprise et
              bénificier d’un renfort temporaire.
            </h3>

            <input className="required m-5 flex-initial w-16" type="radio" />
            <h3 className="font-normal text-black p-2">
              {" "}
              Recruitement : proposez une mission pour trouvez les talents qu’il
              vous faut.
            </h3>

            <input
              className="required m-5 flex-initial w-16"
              type="radio"
              name="branding"
            />
            <h3 className="font-normal text-black p-2">
              Branding : proposez une mission pour promouvoir votre marque
              auprès des étudiants.
            </h3>
          </div>
        </div>

        <div>
          <h2 className="text-base p-2">
            Quand peut s&apos;achever le projet au plus tard ? *
          </h2>
          <input className="required flex p-2 m-5" type="date" />
        </div>
      </form>
    </div>
  );
}
