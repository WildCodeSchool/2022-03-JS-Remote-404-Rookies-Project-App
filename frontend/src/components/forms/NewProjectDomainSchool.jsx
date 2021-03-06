/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import fields from "../../assets/dataset/teaching_fields.json";
import languages from "../../assets/dataset/languages.json";
import ButtonHandler from "./ButtonHandler";

import ExportContextProject from "../../contexts/ProjectContext";

export default function NewProjectDomainSchool({
  handleNextStep,
  currentStep,
  long,
}) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);

  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleProject(data);
  };

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <div>
          <h2 className="text-base p-1">
            Quel est le domaine de votre projet ? *
          </h2>
          <p className="p-5 font-extralight text-s">
            Choisissez 5 catégories maximum qui correspondent le mieux à votre
            projet
          </p>
          <div className="p-5">
            <select
              {...register("teaching_fields")}
              className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {fields.map((d) => (
                <option>{d.field}</option>
              ))}
            </select>
          </div>
          <div />
        </div>

        <div>
          <h2 className="text-base p-1">
            Quelles sont les langues disponibles ? *
          </h2>
          <p className="p-5 font-extralight text-s">
            Quelles sera la/les langues utlisées lors du projet ?
          </p>
          <div className="p-5">
            <select
              {...register("languages")}
              className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {languages.map((d) => (
                <option>{d.language}</option>
              ))}
            </select>
          </div>
          <div />
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
