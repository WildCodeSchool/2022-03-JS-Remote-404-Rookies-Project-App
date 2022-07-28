/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonHandler from "../ButtonHandler";

import ExportContextProject from "../../../contexts/ProjectContext";

const schema = yup
  .object({
    objectives: yup
      .string()
      .required("Veuillez remplir ce champ")
      .min(50, "Vos objectifs doivent contenir au moins 50 caractères"),
    mission_examples: yup
      .string()
      .required("Veuillez remplir ce champ")
      .min(50, "Vos objectifs doivent contenir au moins 50 caractères"),
  })
  .required();

export default function NewProjectDescriptionSchool({
  handleNextStep,
  currentStep,
  long,
}) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleProject(data);
    handleNextStep("Next");
  };

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <div>
          <h2 className="text-base p-1">Décrivez votre projet *</h2>
          <p className="p-1 font-extralight text-s">
            Quels sont les objectifs pédagogiques du projet ? *
          </p>
          <div className="flex flex-wrap m-2 p-1">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="3"
              placeholder="Objectifs pédagogiques"
              {...register("objectives")}
            />
            <p>{errors.objectives?.message}</p>
          </div>
        </div>
        <div>
          <p className="p-1 font-extralight text-s">
            Quels exemples de missions seraient compatibles avec vos enjeux
            universitaire ? *
          </p>
          <div className="flex flex-wrap m-2 p-1">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="3"
              placeholder="Missions"
              {...register("mission_examples")}
            />
            <p>{errors.mission_examples?.message}</p>
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
