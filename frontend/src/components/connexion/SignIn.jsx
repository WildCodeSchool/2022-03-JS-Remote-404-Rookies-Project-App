import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import google from "../../assets/pictures/google-logo.png";
import linkedin from "../../assets/pictures/linkedin-logo.png";

import ConnexionSwitch from "./ConnexionSwitch";

import ExportContextUser from "../../contexts/UserContext";

function SignIn() {
  const navigate = useNavigate();
  const { handleUser } = useContext(ExportContextUser.UserContext);
  const [createFirstname, setFirstname] = useState();
  const [entity, setEntity] = useState();
  const [createLastname, setLastname] = useState();
  const [createEmail, setEmail] = useState();
  const [createPhone, setPhone] = useState();
  const [createPassword, setPassword] = useState();

  const onSubmit = () => {
    if (
      !entity ||
      !createFirstname ||
      !createLastname ||
      !createPhone ||
      !createEmail ||
      !createPassword
    ) {
      notifyError("Des données sont manquantes");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/signin`, {
        entity_category_id: entity,
        firstname: createFirstname,
        lastname: createLastname,
        phone: createPhone,
        email: createEmail,
        password: createPassword,
      })
      .then((res) => {
        handleUser(res.data);
        notifySuccess("Connexion réussie, redirection en cours");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      })
      .catch(() => {
        notifyError("Echec lors de l'enregistrement");
      });
  };

  return (
    <div className="flex flex-col p-10 w-3/5 items-center h-screen">
      <ConnexionSwitch isMember align="self-start" linkto="/login" />
      <ToastContainer />
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold mt-8 mb-5">
          Let&apos;s get you started
        </h1>
        <h3 className="text-lg">Vous êtes ... *</h3>
        <div className="flex mb-3">
          <button
            className={`${
              entity === 1
                ? "bg-green-400 text-white font-semibold"
                : "text-gray-400 hover:bg-green-100"
            } p-2 w-32 border-2 rounded-md mr-4 text-semibold`}
            type="button"
            onClick={() => setEntity(1)}
          >
            Entreprise
          </button>
          <button
            className={`${
              entity === 2
                ? "bg-green-400 text-white font-semibold"
                : "text-gray-400 hover:bg-green-100"
            } p-2 w-32 border-2 rounded-md mr-4 text-semibold`}
            type="button"
            onClick={() => setEntity(2)}
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

        <form className="flex flex-col basis-1/2 items-start w-full">
          <div className="flex">
            <label className="text-lg mr-2" htmlFor="last-name">
              Nom *
              <input
                className="ml-2 border rounded-md text-sm py-1 px-2"
                type="text"
                name="lastname"
                placeholder="Doe"
                onChange={(event) => setFirstname(event.target.value)}
              />
            </label>
            <label className="text-lg" htmlFor="first-name">
              Prénom *
              <input
                className="ml-2 border rounded-md text-sm py-1 px-2"
                type="text"
                name="firstname"
                placeholder="John"
                onChange={(event) => setLastname(event.target.value)}
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
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="text-lg mt-3" htmlFor="phone">
            Numéro de téléphone
            <input
              className="ml-2 border rounded-md text-sm py-1 px-2"
              type="tel"
              name="phone"
              placeholder="+33 612345678"
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>

          <label className="text-lg mt-3" htmlFor="password">
            Votre mot de passe *
            <input
              className="ml-2 border rounded-md text-sm py-1 px-2"
              type="password"
              name="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <p className="text-gray-400 text-xs mt-1">
            Password must contain a minimum of 8 characters / Password must
            contain at least one symbol e.g. @, !
          </p>
          <input
            className="my-6 w-2/3 self-center bg-green-400 hover:bg-emerald-700 cursor-pointer text-white font-semibold py-1 rounded"
            type="button"
            value="Créer mon compte"
            onClick={onSubmit}
          />
        </form>
        <p className="text-gray-500 text-xs mb-4">
          En continuant, vous indiquez que vous avez lu et accepté les
          conditions d&apos;utilisation.
        </p>
      </div>
      <ConnexionSwitch isMember linkto="/login" />
    </div>
  );
}

export default SignIn;
