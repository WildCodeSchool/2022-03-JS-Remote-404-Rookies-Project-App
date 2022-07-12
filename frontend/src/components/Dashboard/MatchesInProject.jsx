import React, { useState, useEffect } from "react";
import axios from "axios";

function MatchesInProject({ project }) {
  const [match, setMatch] = useState();
  useEffect(() => {
    if (project.school_ressources_id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/school-ressources/${
            project.school_ressources_id
          }`
        )
        .then((res) => setMatch(res.data))
        .catch((err) => console.warn(err));
    }
  }, []);

  return (
    <div className="blocproject4">
      {match?.course && (
        <>
          <h1 className="matches">Mes matches :</h1>
          <div className="bloc5">
            <div className="imgschool">
              {/* <img src={match.profiles_id} alt={} /> */}
            </div>
            <div className="listed">
              <p className="school">Ecole Group</p>
              <p className="schoolbis">Patrick Ecole</p>
            </div>
            <h1 className="schoolid">{match.course}</h1>
            <button type="button" className="edit">
              Voir plus
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MatchesInProject;
