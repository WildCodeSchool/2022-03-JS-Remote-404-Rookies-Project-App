/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import * as yup from "yup";

import SelectDepartment from "../../SelectDepartment";

import ButtonHandler from "../ButtonHandler";

import ExportContextProject from "../../../contexts/ProjectContext";
import ExportContextUser from "../../../contexts/UserContext";

const schema = yup
  .object({
    name: yup.string().required("Veuillez remplir ce champ").lowercase(),
    description: yup.string().required("Veuillez remplir ce champ").lowercase(),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

export default function NewProjectConsultingCompany({
  handleNextStep,
  currentStep,
  long,
}) {
  const [workforces, setWorkforces] = useState([]);
  const [sectors, setSectors] = useState([]);
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const { user } = useContext(ExportContextUser.UserContext);
  const [companyName, setCompanyName] = useState();

  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitSuccessful },
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
    if (user.company_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`)
        .then((res) => setCompanyName(res.data.name))
        .catch((err) => console.warn(err));
    }
  }, []);

  return (
    <div className="border-b-2 flex flex-col flex-wrap w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <div className="flex justify-end">
          <label htmlFor="image">image:</label>
          <input type="file" {...register("image")} />
        </div>
        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Votre entreprise *</h2>
          <input
            {...register("name")}
            className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Saisir votre école"
            value={companyName}
          />
        </div>
        <h2 className="text-base p-1">Description de l&apos;entreprise *</h2>
        <div className="flex flex-wrap m-2 p-1">
          <textarea
            className="required form-control
            w-1/2 "
            type="text"
            rows="2"
            placeholder="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
            {...register("description")}
          />
          <p>{errors.companydescription?.message}</p>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-wrap mb-5">
            <h2 className="text-base p-1">Industrie</h2>
            <div className="flex flex-wrap m-2">
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

          <div className="flex mb-5">
            <h2 className="text-base p-1">Site web</h2>
            <input
              className="form-control
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
              type="url"
              placeholder="www.entreprise.com"
              {...register("website")}
            />
            <p>{errors.website?.message}</p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="flex mb-5">
            <div className="flex flex-row justify-evenly">
              <label htmlFor="campus">
                <h2 className="text-base p-1">
                  Localisation de l&apos;entreprise
                </h2>
                <SelectDepartment />
              </label>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <h2 className="text-base p-1">Effectif de l&apos;entreprise</h2>
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
        <div className=" flex flex-col items-center justify-center">
          {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
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
