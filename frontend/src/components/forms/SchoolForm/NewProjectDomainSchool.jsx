/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

import ButtonHandler from "../ButtonHandler";

import ExportContextProject from "../../../contexts/ProjectContext";

export default function NewProjectDomainSchool({
  handleNextStep,
  currentStep,
  long,
}) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const [fields, setFields] = useState([]);
  const [languages, setLanguages] = useState([]);

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
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages`)
      .then((res) => setLanguages(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="text-base p-1">
              Quel est le domaine de votre projet ? *
            </h2>
            <p className="p-5 font-extralight text-s">
              Choisissez 5 catégories maximum qui correspondent le mieux à votre
              projet
            </p>
          </div>
          <div className="p-5">
            <select
              {...register("teaching_fields")}
              className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              multiple
              size="3"
            >
              {fields.map((d) => (
                <option key={d.field}>{d.field}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-base p-1">
              Quelles sont les langues disponibles ? *
            </h2>
            <p className="p-5 font-extralight text-s">
              Quelles sera la/les langues utlisées lors du projet ?
            </p>
          </div>
          <div className="p-5">
            <select
              {...register("languages")}
              className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              multiple
              size="3"
            >
              {languages.map((d) => (
                <option key={d.language}>{d.language}</option>
              ))}
            </select>
          </div>
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
