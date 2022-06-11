/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import industries from "../../assets/dataset/industries.json";
import range from "../../assets/dataset/workforce.json";
import SelectDepartment from "../SelectDepartment";
import SelectCity from "../SelectCity";

const schema = yup
  .object({
    companyname: yup.string().required("Veuillez remplir ce champ").lowercase(),
    companydescription: yup
      .string()
      .required("Veuillez remplir ce champ")
      .lowercase()
      .min(50, "Votre description doit contenir au moins 50 caractères"),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

export default function NewProjectConsultingCompany() {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await 2000;
    // eslint-disable-next-line no-restricted-syntax
    console.log(data);
  };
  return (
    <div className="border-b-2 flex flex-col flex-wrap w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <h2 className="text-base p-1">Le nom de votre entreprise *</h2>
        <div className="flex justify-end">
          <label htmlFor="image">image:</label>
          <input type="file" {...register("image")} />
        </div>
        <div className="flex flex-wrap m-2 p-1">
          <input
            className="required form-control
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
            placeholder="Entreprise SAS"
            {...register("companyname")}
          />
          <p>{errors.comapnyname?.message}</p>
        </div>
        <h2 className="text-base p-1">Description de l&apos;entreprise *</h2>
        <div className="flex flex-wrap m-2 p-1">
          <textarea
            className="required form-control
            w-1/2 "
            type="text"
            rows="2"
            placeholder="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
            {...register("companydescription")}
          />
          <p>{errors.companydescription?.message}</p>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-wrap mb-5">
            <h2 className="text-base p-1">Industrie</h2>
            <div className="flex flex-wrap m-2">
              <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {industries.map((d) => (
                  <option>{d.industry}</option>
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
                <SelectCity />
              </label>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <h2 className="text-base p-1">Effectif de l&apos;entreprise</h2>
            <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {range.map((d) => (
                <option>{d.range}</option>
              ))}
            </select>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <button
            type="submit"
            formMethod="PUT"
            className="  text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
          {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
        </div>
      </form>
    </div>
  );
}
