/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";

function SelectDepartment({ manageCity }) {
  const [department, setDepartment] = useState("");

  useEffect(() => {
    axios
      .get(`https://geo.api.gouv.fr/departements`)
      .then((res) => setDepartment(res.data));
  }, []);

  return (
    <div>
      <select
        onChange={(e) => manageCity(e.target.value)}
        className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {department &&
          department.map((el, index) => (
            <option
              value={el.code}
              key={index}
            >{`${el.code}-${el.nom}`}</option>
          ))}
      </select>
    </div>
  );
}

export default SelectDepartment;
