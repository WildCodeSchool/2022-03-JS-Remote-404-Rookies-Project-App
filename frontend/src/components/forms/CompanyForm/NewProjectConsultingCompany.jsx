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
    company_name: yup
      .string()
      .required("Veuillez indiquer votre nom d'entreprise."),
    description: yup
      .string()
      .required("Veuillez décrire votre entreprise.")
      .typeError(),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

export default function NewProjectConsultingCompany({
  handleNextStep,
  currentStep,
  long,
}) {
  const [city, setCity] = useState();
  const [selectedDpt, setSelectedDpt] = useState();
  const [workforces, setWorkforces] = useState([]);
  const [sectors, setSectors] = useState([]);
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const { user } = useContext(ExportContextUser.UserContext);
  const [company, setCompany] = useState();

  useEffect(() => {
    if (selectedDpt) {
      axios
        .get(`https://geo.api.gouv.fr/departements/${selectedDpt}/communes`)
        .then((res) => setCity(res.data));
    }
  }, [selectedDpt]);

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
        .then((res) => setCompany(res.data))
        .catch((err) => console.warn(err));
    }
  }, []);

  const preloadedValues = {
    company_name: company?.name,
    description: company?.description,
    website: company?.website,
    range: company?.workforces_id,
    sector: company?.sectors_id,
  };

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: preloadedValues,
  });

  const manageCity = (value) => {
    setCity();
    setSelectedDpt(value);
  };

  const onSubmit = (data) => {
    handleProject(data);
    handleNextStep("Next");
  };

  return (
    <div className="flex w-full p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2 w-full">
        <div className="flex justify-between w-full pb-4">
          <div className="flex flex-col">
            <h2 className="text-base p-1">Votre entreprise *</h2>
            <p className="text-red-500 text-sm">
              {errors.company_name?.message}
            </p>
            <input
              {...register("company_name")}
              className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Saisir votre école"
              name="company_name"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base p-1">Votre Logo </h2>
            <input type="file" {...register("logo")} />
          </div>
        </div>
        <div className="flex flex-col w-full pb-4">
          <h2 className="text-base p-1">Description de l&apos;entreprise *</h2>
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
          <textarea
            className="required form-control
             border-gray-400 rounded border shadow-sm"
            type="text"
            rows="2"
            placeholder="Description de mon entreprise"
            defaultValue={company?.description}
            {...register("description")}
          />
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col pr-4 mb-4">
            <h2 className="text-base p-1">Industrie</h2>
            <div className="flex flex-wrap">
              <select
                {...register("sector")}
                className=" bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {sectors.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.sector}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <h2 className="text-base p-1">Site web</h2>
            <p className="text-red-500 text-sm">{errors.website?.message}</p>
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
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
              type="url"
              placeholder="www.entreprise.com"
              {...register("website")}
            />
          </div>

          <div className="flex flex-col mb-5 mr-32">
            <label htmlFor="campus">
              <h2 className="text-base p-1">
                Localisation de l&apos;entreprise
              </h2>
              <SelectDepartment manageCity={manageCity} />
              {city && (
                <select
                  {...register("campus")}
                  className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {city.map((el) => (
                    <option key={el.nom}>{el.nom}</option>
                  ))}
                </select>
              )}
            </label>
          </div>

          <div className="flex flex-col mb-5 w-1/3">
            <h2 className="text-base p-1">Effectif de l&apos;entreprise</h2>
            <div className="w-full">
              <select
                {...register("range")}
                className="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {workforces.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.range}
                  </option>
                ))}
              </select>
            </div>
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
