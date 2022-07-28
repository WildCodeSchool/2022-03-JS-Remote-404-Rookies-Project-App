/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ButtonHandler from "../ButtonHandler";

import ExportContextProject from "../../../contexts/ProjectContext";

export default function NewProjectDomainCompany({
  handleNextStep,
  currentStep,
  long,
}) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const [fields, setFields] = useState([]);

  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleProject(data);
    handleNextStep("Next");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/fields`)
      .then((res) => setFields(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="p-10 flex justify-around flex-col w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2 w-full">
        <h2 className="text-base">Quel est le domaine de votre projet ? *</h2>
        <p className="p-5 font-extralight text-s">
          Choisissez 5 catégories maximum qui correspondent le mieux à votre
          projet.
        </p>
        <div className="inline-block relative m-2">
          <select
            {...register("teaching_fields")}
            multiple
            required
            size={5}
            className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {fields.map((d) => (
              <option key={d.id} value={d.id}>
                {d.field}
              </option>
            ))}
          </select>
        </div>
        <ButtonHandler
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          long={long}
        />
      </form>
    </div>
  );
}
