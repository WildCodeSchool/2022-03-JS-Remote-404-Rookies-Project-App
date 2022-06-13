import React, { useState, useEffect } from "react";
import axios from "axios";

function SelectCity({ department }) {
  const [city, setCity] = useState();

  useEffect(() => {
    axios
      .get(`https://geo.api.gouv.fr/departements/${department}/communes`)
      .then((res) => setCity(res.data));
  }, [department]);

  return (
    <div>
      <select>
        {city && city.map((el) => <option key={el}>{el.nom}</option>)}
      </select>
    </div>
  );
}

export default SelectCity;
