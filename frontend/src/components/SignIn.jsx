import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import google from "../assets/google-logo.png";
import linkedin from "../assets/linkedin-logo.png";

function SignIn() {
  const navigate = useNavigate();
  const [entity, setEntity] = useState("");

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold mt-10 mb-5">
        Let&apos;s get you started
      </h1>
      <h3 className="text-lg">Vous êtes ... *</h3>
      <div className="flex mb-3">
        <button
          className={`${
            entity === "Entreprise"
              ? "bg-green-400 text-white font-semibold"
              : "text-gray-400 hover:bg-green-100"
          } p-2 w-32 border-2 rounded-md mr-4 text-semibold`}
          type="button"
          onClick={() => setEntity("Entreprise")}
        >
          Entreprise
        </button>
        <button
          className={`${
            entity === "Ecole"
              ? "bg-green-400 text-white font-semibold"
              : "text-gray-400 hover:bg-green-100"
          } p-2 w-32 border-2 rounded-md mr-4 text-semibold`}
          type="button"
          onClick={() => setEntity("Ecole")}
        >
          Ecole
        </button>
      </div>
      <h3 className="text-sm border-t-2 w-full text-left py-2">
        Continuez avec
      </h3>
      <div className="flex mb-3">
        <button
          className="p-2 w-40 border-2 rounded-md mr-4 text-semibold hover:bg-green-100 flex justify-center"
          type="button"
        >
          <img src={google} alt="google" className="h-6 mr-3" />
          Google
        </button>
        <button
          className="p-2 w-40 border-2 rounded-md mr-4 text-semibold hover:bg-green-100 flex justify-center"
          type="button"
        >
          <img src={linkedin} alt="linkedin" className="h-6 mr-3" />
          LinkedIn
        </button>
      </div>
      <h3 className="text-sm border-t-2 w-full text-left py-2">
        Continuez avec
      </h3>

      <form
        className="flex flex-col basis-1/2 items-start w-full"
        onSubmit={() => navigate("/dashboard", { replace: true })}
      >
        <div className="flex">
          <label className="text-lg mr-2" htmlFor="last-name">
            Nom *
            <input
              className="ml-2 border rounded-md text-sm py-1 px-2"
              type="text"
              name="last-name"
              placeholder="Doe"
            />
          </label>
          <label className="text-lg" htmlFor="first-name">
            Prénom *
            <input
              className="ml-2 border rounded-md text-sm py-1 px-2"
              type="text"
              name="first-name"
              placeholder="John"
            />
          </label>
        </div>
        <label className="text-lg mt-3" htmlFor="mail">
          Votre Email *
          <input
            className="ml-2 border rounded-md text-sm py-1 px-2"
            type="text"
            name="mail"
            placeholder="yourname@email.com"
          />
        </label>
        <label className="text-lg mt-3" htmlFor="phone">
          Numéro de téléphone
          <input
            className="ml-2 border rounded-md text-sm py-1 px-2"
            type="mail"
            name="mail"
            placeholder="+33 612345678"
          />
        </label>

        <label className="text-lg mt-3" htmlFor="password">
          Votre mot de passe *
          <input
            className="ml-2 border rounded-md text-sm py-1 px-2"
            type="password"
            name="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </label>
        <p className="text-gray-400 text-xs mt-1">
          Password must contain a minimum of 8 characters / Password must
          contain at least one symbol e.g. @, !
        </p>
        <input
          className="my-6 w-2/3 self-center bg-green-400 hover:bg-emerald-700 cursor-pointer text-white font-semibold py-1 rounded"
          type="submit"
          value="Créer mon compte"
        />
      </form>
      <p className="text-gray-500 text-xs mb-4">
        En continuant, vous indiquez que vous avez lu et accepté les conditions
        d&apos;utilisation.
      </p>
    </div>
  );
}

export default SignIn;
