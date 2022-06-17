import React from "react";
import { useNavigate } from "react-router-dom";

import google from "../../assets/pictures/google-logo.png";
import linkedin from "../../assets/pictures/linkedin-logo.png";

import ConnexionSwitch from "./ConnexionSwitch";

function LogIn() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col m-10 w-3/5 items-center">
      <ConnexionSwitch isMember={false} align="self-start" linkto="/" />
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold mt-10 mb-5">Welcome back !</h1>
        <form
          className="flex flex-col basis-1/2 items-start w-full"
          onSubmit={() => navigate("/dashboard", { replace: true })}
        >
          <label className="text-lg mt-3 text-left w-full" htmlFor="mail">
            Votre Email *
            <input
              className="border rounded-md text-sm py-1 px-2 w-full"
              type="text"
              name="mail"
              placeholder="yourname@email.com"
            />
          </label>
          <label className="text-lg mt-3 text-left w-full" htmlFor="password">
            Votre mot de passe *
            <input
              className="border rounded-md text-sm py-1 px-2 w-full"
              type="password"
              name="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
          </label>
          <input
            className="my-6 w-2/3 self-center bg-green-400 hover:bg-emerald-700 cursor-pointer text-white font-semibold py-1 rounded"
            type="submit"
            value="Se connecter"
          />
        </form>
        <p className="text-xs self-center mb-8 text-emerald-700 font-bold underline">
          Mot de passe oublié ?
        </p>
        <h3 className="text-sm text-center border-t-2 w-full py-2">
          Ou continuez avec
        </h3>
        <div className="flex mb-10 justify-center w-full">
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
      </div>
      <ConnexionSwitch isMember={false} linkto="/" />
    </div>
  );
}

export default LogIn;
