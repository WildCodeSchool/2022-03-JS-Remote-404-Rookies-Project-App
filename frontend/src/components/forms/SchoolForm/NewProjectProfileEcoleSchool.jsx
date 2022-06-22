/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonHandler from "../ButtonHandler";
import ExportContextProject from "../../../contexts/ProjectContext";

import SelectDepartment from "../../SelectDepartment";

const schema = yup
  .object({
    companycommitments: yup
      .string()
      .lowercase()
      .required("Veuillez remplir ce champ")
      .min(50, "Vos objectifs doivent contenir au moins 50 caractères"),
  })
  .required();

export default function NewProjectProfileEcoleSchool({
  handleNextStep,
  currentStep,
  long,
}) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const [workforces, setWorkforces] = useState([]);
  const [sectors, setSectors] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/workforces`)
      .then((res) => setWorkforces(res.data))
      .catch((err) => console.warn(err));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sectors`)
      .then((res) => setSectors(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-wrap flex-col p-1">
            <h2 className="text-base p-1">Taille de l’entreprise idéale</h2>
            <div className="p-1 flex flex-col">
              <select
                {...register("range")}
                className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {workforces.map((d) => (
                  <option key={d.range}>{d.range}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-base p-1">
              Industrie qui correspondrait au cours
            </h2>
            <div className="p-1 flex flex-col">
              <select
                {...register("sector")}
                className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {sectors.map((d) => (
                  <option key={d.sector}>{d.sector}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mb-5 p-1">
            <div className="p-1 flex flex-row justify-evenly">
              <label htmlFor="campus">
                <h2 className="text-base p-1">
                  Localisation de l&apos;entreprise
                </h2>
                <SelectDepartment />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base p-1">
            Collaboration en distanciel possible ?
          </h2>
          <div className="p-1 flex flex-col">
            <select
              {...register("remote")}
              className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="1">Oui</option>
              <option value="0">Non</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base p-1">Engagement de l’entreprise ? *</h2>
          <div className="flex m-5 ">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="2"
              placeholder="Compléter le cahier des charges,
            Orienter le travail des étudiants, en exigeant d’eux le comportement
            de professionnels,
            Mettre à disposition de l’équipe les informations nécessaires à la
            réussite de la mission,
            Prendre en charge les frais inhérents à la mission (frais de
            déplacements, hébergement et matériels si nécessaire),
            Évaluer l’implication, le comportement et le travail de chaque
            étudiant de l’équipe,
            Participer au lancement et au jury final de la mission."
              {...register("commitment")}
            />
          </div>
          <p>{errors.companycommitments?.message}</p>
        </div>
      </form>
      <ButtonHandler
        handleNextStep={handleNextStep}
        currentStep={currentStep}
        long={long}
      />
    </div>
  );
}
