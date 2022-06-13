/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectCity from "./SelectCity";

function SelectDepartment() {
  const [department, setDepartment] = useState("");
  const [selected, setSelected] = useState();

  useEffect(() => {
    axios
      .get(`https://geo.api.gouv.fr/departements`)
      .then((res) => setDepartment(res.data));
  }, []);

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)}>
        {department &&
          department.map((el, index) => (
            <option
              value={el.code}
              key={index}
            >{`${el.code}-${el.nom}`}</option>
          ))}
      </select>
      {selected && <SelectCity department={selected} />}
    </div>
  );
}

export default SelectDepartment;
