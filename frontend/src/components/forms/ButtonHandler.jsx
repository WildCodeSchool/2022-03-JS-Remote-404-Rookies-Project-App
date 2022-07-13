import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import ExportContextProject from "../../contexts/ProjectContext";
import ExportContextUser from "../../contexts/UserContext";

import rightarrowbutton from "../../assets/pictures/rightarrowbutton.png";
import leftarrowbutton from "../../assets/pictures/leftarrowbutton.png";

function ButtonHandler({ handleNextStep, currentStep, long }) {
  const { project } = useContext(ExportContextProject.ProjectContext);
  const { user } = useContext(ExportContextUser.UserContext);
  const navigate = useNavigate();

  const handleSending = () => {
    if (project.course) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/school-ressources/${user.id}`,
          project,
          { withCredentials: true }
        )
        .then(() => {
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
          notifySuccess("Projet créé !");
        })
        .catch(() => notifyError("Un problème est survenu"));
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/company-projects/${user.id}`,
          project
        )
        .then(() => {
          setTimeout(() => {
            navigate("/dashboard");
          }, 4000);
          notifySuccess("Projet créé !");
        })
        .catch(() => notifyError("Un problème est survenu"));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="button-wrapper">
        {currentStep >= 1 && (
          <button
            type="submit"
            onClick={() => handleNextStep("Return")}
            className="back-btn"
            id="back-btn"
          >
            <img src={leftarrowbutton} alt="vector" /> retour
          </button>
        )}
        {currentStep < long - 1 && (
          <button
            type="submit"
            formMethod="PUT"
            className="primarybutton"
            id="primarybutton"
          >
            Suivant <img src={rightarrowbutton} alt="rightarrowbutton" />
          </button>
        )}

        {currentStep >= long - 1 && (
          <button
            type="button"
            id="primarybutton"
            className="primarybutton"
            onClick={() => handleSending()}
          >
            Envoyer
          </button>
        )}
      </div>
    </>
  );
}

export default ButtonHandler;
