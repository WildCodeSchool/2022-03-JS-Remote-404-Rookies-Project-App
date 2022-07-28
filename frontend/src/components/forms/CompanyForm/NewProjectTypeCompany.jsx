/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ButtonHandler from "../ButtonHandler";

import ExportContextProject from "../../../contexts/ProjectContext";

const schema = yup
  .object({
    project_types_id: yup
      .number()
      .required("Veuillez remplir ce champ")
      .typeError("Veuillez sélectionner un type de projet."),
    end_date: yup
      .date()
      .default(() => new Date())
      .required("Veuillez remplir ce champ")
      .typeError("Veuillez sélectionner une date."),
  })
  .required();

export default function NewProjectTypeCompany({
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
    <div className="flex flex-col flex-wrap w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2 w-full">
        <div>
          <h2 className="text-base p-1">
            Quel est le type de votre projet ? *
          </h2>
          <p className="text-red-500 text-sm">
            {errors.project_types_id?.message}
          </p>
          <div className="flex m-5">
            <input
              className=" 
            required m-5 flex-initial w-16"
              type="radio"
              {...register("project_types_id")}
              value={1}
            />
            <h3 className="font-normal text-black p-1">
              Consulting : proposez une mission propre à votre entreprise et
              bénificier d’un renfort temporaire.
            </h3>

            <input
              className="required m-5 flex-initial w-16"
              type="radio"
              {...register("project_types_id")}
              value={2}
            />
            <h3 className="font-normal text-black p-1">
              Recruitement : proposez une mission pour trouvez les talents qu’il
              vous faut.
            </h3>

            <input
              className="required m-5 flex-initial w-16"
              type="radio"
              name="branding"
              {...register("project_types_id")}
              value={3}
            />
            <h3 className="font-normal text-black p-1">
              Branding : proposez une mission pour promouvoir votre marque
              auprès des étudiants.
            </h3>
          </div>
        </div>

        <div>
          <h2 className="text-base p-1">
            Quand peut s&apos;achever le projet au plus tard ? *
          </h2>
          <p className="text-red-500 text-sm">{errors.end_date?.message}</p>
          <input
            className="required flex p-1 m-5"
            type="date"
            {...register("end_date")}
          />
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
