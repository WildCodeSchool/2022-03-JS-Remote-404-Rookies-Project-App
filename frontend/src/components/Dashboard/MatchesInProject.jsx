import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import randompic from "../../assets/pictures/blank-profile-picture.png";

function MatchesInProject({ project }) {
  const [match, setMatch] = useState();
  const [matchUser, setMatchUser] = useState();
  useEffect(() => {
    if (project.school_ressources_id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/school-ressources/${
            project.school_ressources_id
          }`
        )
        .then((res) => {
          setMatch(res.data);
          axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/users/${
                res.data.profiles_id
              }`
            )
            .then((response) => setMatchUser(response.data))
            .catch((err) => console.warn(err));
        })
        .catch((err) => console.warn(err));
    } else if (project.course) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/company-projects/`)
        .then((res) => {
          const filtered = res.data.find(
            (cp) => cp.school_ressources_id === project.id
          );
          setMatch(filtered);
          axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/users/${
                filtered.profiles_id
              }`
            )
            .then((response) => setMatchUser(response.data))
            .catch((err) => console.warn(err));
        })
        .catch((err) => console.warn(err));
    }
  }, []);

  const handleStageChange = (e, p, course) => {
    if (course) {
      axios
        .put(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/school-ressources/stages/${e}/${p}`
        )
        .then(() => notifySuccess("Demande de matching en cours"))
        .catch((err) => console.warn(err));
    } else {
      axios
        .put(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/company-projects/stages/${e}/${p}`
        )
        .then(() => notifySuccess("Demande de matching en cours"))
        .catch((err) => console.warn(err));
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="blocproject4">
      <ToastContainer />
      {match?.course && (
        <>
          <h1 className="matches">Mes matches :</h1>
          <div className="bloc5">
            <div className="imgschool">
              <img
                className="rounded-full w-12"
                src={matchUser?.images_url ? matchUser.images_url : randompic}
                alt="matchingUser"
              />
            </div>
            <div className="listed">
              <p className="schoolbis">
                {matchUser?.firstname} {matchUser?.lastname}
              </p>
            </div>
            <h1 className="schoolid">{match.course}</h1>
            <button
              type="button"
              className="edit"
              onClick={() =>
                openInNewTab(
                  `http://localhost:3000/share/${
                    match.goal ? "company-projects" : "school-ressources"
                  }/${match.id}`
                )
              }
            >
              Voir plus
            </button>
          </div>
        </>
      )}

      {match?.project_name && (
        <>
          <h1 className="matches">Mes matches :</h1>
          <div className="bloc5">
            <div className="imgschool">
              <img
                className="rounded-full w-12"
                src={matchUser?.images_url ? matchUser.images_url : randompic}
                alt="matchingUser"
              />
            </div>
            <div className="listed">
              <p className="school">Ecole Group</p>
              <p className="schoolbis">
                {matchUser?.firstname} {matchUser?.lastname}
              </p>
            </div>
            <h1 className="schoolid">{match.project_name}</h1>
            <button
              type="button"
              className="edit"
              onClick={() =>
                openInNewTab(
                  `http://localhost:3000/share/${
                    match.goal ? "company-projects" : "school-ressources"
                  }/${match.id}`
                )
              }
            >
              Voir plus
            </button>
          </div>
        </>
      )}

      {!match && (
        <>
          <h1 className="matches">Mes matches :</h1>
          <div className="bloc5">
            <p className="schoolbis">Aucun match en cours</p>
            <button
              type="button"
              className="edit w-52"
              onClick={() => handleStageChange(3, project.id, project.course)}
            >
              Demander un match
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MatchesInProject;
