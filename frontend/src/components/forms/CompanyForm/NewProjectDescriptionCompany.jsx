/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ButtonHandler from "../ButtonHandler";

import ExportContextProject from "../../../contexts/ProjectContext";

const schema = yup
  .object({
    project_name: yup
      .string()
      .required("Veuillez donner un nom à votre projet."),
    goal: yup
      .string()
      .required("Veuillez indiquer le but du projet.")
      .min(50, "Vos objectifs doivent contenir au moins 50 caractères"),
    ressources_available: yup
      .string()
      .required("Veuillez indiquer les ressources disponibles.")
      .min(50, "Vos ressources doivent contenir au moins 50 caractères"),
  })
  .required();

export default function NewProjectDescriptionCompany({
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
    <div className="border-b-2 flex flex-col flex-wrap w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2 w-full">
        <div>
          <h2 className="text-base">Nom du projet ? *</h2>
          <p className="text-red-500 text-sm">{errors.project_name?.message}</p>
          <div className="flex flex-wrap p-1 m-2">
            <input
              className="required form-control
              w-96
              px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
              type="text"
              placeholder="Projet étude de marché (Allemagne)"
              {...register("project_name")}
            />
          </div>
        </div>

        <div>
          <h2 className="text-base p-1">
            Quel est votre objectif principal ? *
          </h2>
          <p className="text-red-500 text-sm">{errors.goal?.message}</p>
          <p className="p-1 font-extralight text-s">
            Décrivez le problème que les étudiants devront solutionner et le
            résultat attendu des étudiants.
          </p>
          <div className="flex flex-wrap m-2 p-1">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="2"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
              {...register("goal")}
            />
          </div>
        </div>

        <div>
          <h2 className="text-base p-1">
            Quelles seront les ressources disponibles pour les étudiants ? *
          </h2>
          <p className="text-red-500 text-sm">
            {errors.ressources_available?.message}
          </p>
          <p className="p-1 font-extralight text-s">
            Décrivez les ressources que vous pourrait mettre à disposition
            (temps disponible, accès aux outils internes, documents utiles,
            membre de l’équipe disponible).
          </p>
          <div className="flex flex-wrap m-2 p-1">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="2"
              placeholder="Et fugit soluta dolorem ratione et quia minus eum unde voluptas ad autem dolor. Non ipsam adipisci sit dolores accusamus non voluptatem enim. Qui quia tenetur et odit quia vel maiores nemo aut voluptatum tenetur et minus laboriosam.

          Aut nostrum odio ea iure obcaecati aut reiciendis dignissimos qui mollitia labore est quia dolore. Id magnam incidunt hic rerum ipsum est placeat."
              {...register("ressources_available")}
            />
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
