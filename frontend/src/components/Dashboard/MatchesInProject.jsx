import { useState, useEffect } from "react";

import axios from "axios";

import Default from "../../assets/pictures/blank-profile-picture.png";

function MatchesInProject() {
  const [school, setSchool] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/schools/1`)
      .then((res) => setSchool(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="blocproject4">
      <h1 className="matches">Mes matches :</h1>
      <div className="bloc5">
        <div className="imgschool">
          <img src={school.image_url ? school.image_url : {Default} } alt={Default} />
        </div>
        <div className="listed">
          <p className="school">{school.campuses}</p>
          <p className="schoolbis">{school.website}</p>
        </div>
        <h1 className="schoolid">{school.name}</h1>
        <button type="submit" className="edit">
          Voir plus
        </button>
      </div>
    </div>
  );
}

export default MatchesInProject;
