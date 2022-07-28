import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../services/toastify";
import "react-toastify/dist/ReactToastify.css";

function BackConnexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    if (!email || !password) {
      notifyError("Veuillez remplir tous les champs");
      return;
    }
    if (email !== "admin@rookies.com") {
      notifyError("Vous n'avez pas les droits d'accès");
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password })
      .then(() => {
        notifySuccess("Connexion réussie, redirection en cours");
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      })
      .catch(() => notifyError("L'email ou le mot de passe est incorrect"));
  };

  return (
    <div className="flex flex-col m-10 w-full items-center">
      <ToastContainer />
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold mt-10 mb-5">
          Welcome back to the back !
        </h1>
        <form className="flex flex-col basis-1/2 items-start w-full">
          <label className="text-lg mt-3 text-left w-full" htmlFor="mail">
            Votre Email *
            <input
              className="border rounded-md text-sm py-1 px-2 w-full"
              type="text"
              name="mail"
              placeholder="yourname@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="text-lg mt-3 text-left w-full" htmlFor="password">
            Votre mot de passe *
            <input
              className="border rounded-md text-sm py-1 px-2 w-full"
              type="password"
              name="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <input
            className="my-6 w-2/3 self-center bg-green-400 hover:bg-emerald-700 cursor-pointer text-white font-semibold py-1 rounded"
            type="button"
            value="Se connecter"
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default BackConnexion;
