/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer } from "react-toastify";
// import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import fields from "../../assets/dataset/teaching_fields.json";
import SelectDepartment from "../SelectDepartment";
import SelectCity from "../SelectCity";
import UserSettings from "../Dashboard/UserSettings";

const schema = yup
  .object({
    schoolname: yup.string().required("Veuillez remplir ce champ").lowercase(),
    schooldescription: yup
      .string()
      .lowercase()
      .min(50, "Votre description doit contenir au moins 50 caractères"),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

function MySchool() {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(data);
  };
  return (
    <div className="">
      <ToastContainer />
      <div className="flex justify-between w-full mb-2 p-1 ">
        <h1 className="m-5 text-emerald-700">Mon équipe</h1>
        <UserSettings />
      </div>
      <div className="border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 justify-center m-auto rounded-lg">
        <h2 className="text-base p-2 ">Mon Ecole</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap  m-2 p-2"
        >
          <div className="p-2 flex justify-end">
            <label htmlFor="image">
              Image:
              <input
                type="file"
                {...register("image_url")}
                className="flex flex-wrap flex-col p-2"
              />
            </label>
          </div>

          <label
            htmlFor="school"
            className="flex flex-col w-full font-bold p-2"
          >
            Le nom de votre école *
            <input
              className="w-full"
              required
              type="text"
              {...register("name")}
            />
            <p>{errors.schoolname?.message}</p>
          </label>

          <label
            htmlFor="description"
            className="flex flex-col w-full font-bold p-2 "
          >
            Description
            <textarea
              className="w-full p-2 m-1"
              type="text"
              rows="2"
              {...register("description")}
            />
            <p>{errors.schooldescription?.message}</p>
          </label>

          <label
            htmlFor="domain"
            className="flex flex-col w-full font-bold p-2 "
          >
            Domaines d&apos;enseignement
            <select
              className="w-full p-2 m-1 flex flex-col flex-wrap"
              name="user_domain"
            >
              {fields.map((d) => (
                <option>{d.field}</option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap items-center justify-center w-full">
            <label
              htmlFor="campus"
              className="flex flex-col w-1/2 font-bold p-2 "
            >
              Localisation des campus
              <SelectDepartment />
              <SelectCity {...register("campuses")} />
            </label>

            <label htmlFor="web" className="flex flex-col w-1/2 font-bold p-2 ">
              Site web
              <input className="" type="url" {...register("website")} />
              <p>{errors.website?.message}</p>
            </label>
          </div>

          <div className="flex w-full p-2 m-1  items-center justify-center">
            <button
              type="submit"
              formMethod="PUT"
              className=" flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
            {isSubmitSuccessful && (
              <div>Votre formulaire a bien été soumis</div>
            )}
          </div>
        </form>
        <hr className="w-11/12 flex items-center justify-center m-auto bg-black  mb-5" />

        <div className="p-2 m-1 w-full flex items-center justify-between">
          <h2 className=" ml-5 text-base p-2 ">Mon Equipe</h2>
          <button
            type="button"
            className="   mr-7 flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center  mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Inviter
          </button>
        </div>
      </div>
    </div>
  );
}

export default MySchool;
