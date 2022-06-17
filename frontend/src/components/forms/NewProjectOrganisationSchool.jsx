/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line jsx-a11y/label-has-associated-control

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ExportContextProject from "../../contexts/ProjectContext";
import ButtonHandler from "./ButtonHandler";
import levels from "../../assets/dataset/student_levels.json";
import schools from "../../assets/dataset/schools.json";
import SelectDepartment from "../SelectDepartment";
import SelectCity from "../SelectCity";

const schema = yup
  .object({
    coursename: yup.string().lowercase().required("Veuillez remplir ce champ"),
    formationname: yup
      .string()
      .lowercase()
      .required("Veuillez remplir ce champ"),
    studentnumber: yup
      .number("Ce champ doit contenir un numéro")
      .required("Veuillez remplir ce champ")
      .min(1, "Veuillez entrer 1 caractère"),
    studentgroups: yup
      .number("Ce champ doit contenir un numéro")
      .required("Veuillez remplir ce champ")
      .min(1, "Veuillez entrer 1 caractère"),
    weeklyhours: yup
      .number("Ce champ doit contenir un numéro")
      .required("Veuillez remplir ce champ")
      .min(1, "Veuillez entrer 1 caractère"),
  })
  .required();

function NewProjectOrganisationSchool({ handleNextStep, currentStep, long }) {
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
  };

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row flex-wrap p-2"
      >
        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Votre école *</h2>

          <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {schools.map((d) => (
              <option key={d.name}> {d.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Nom de votre cours *</h2>

          <input
            className="required form-control
          flex
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
            placeholder="Management International"
            {...register("coursename")}
          />
          <p>{errors.coursename?.message}</p>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Formation ? *</h2>
          <input
            className="required form-control
                flex
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
            placeholder="Master Commerce International"
            {...register("formationname")}
          />
          <p>{errors.formationname?.message}</p>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Niveau des étudiants ? *</h2>
          <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {levels.map((d) => (
              <option key={d.level}>{d.level}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-row justify-evenly">
          <h2 className="text-base p-1"> Localisation des campus </h2>
          <SelectDepartment />
          <SelectCity />
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">
            Combien d’étudiants seront disponibles dans votre cours ? *
          </h2>
          <p className="p-1 font-extralight text-xs">
            Donnez votre meilleure estimation du nombre total des étudiants
            participant au cours
          </p>
          <input
            className="required form-control
          block
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
            type="number"
            placeholder="40"
            {...register("studentnumber")}
          />
          <p>{errors.studentnumber?.message}</p>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">
            Comment travailleront les étudiants ? *
          </h2>

          <button
            type="button"
            className="p-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Individuellement
          </button>
          <button
            type="button"
            className="p-2 focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            En groupe
          </button>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">
            Nombre de groupes par entreprise ? *
          </h2>
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
            type="number"
            placeholder="2 groupes"
            {...register("studentgroups")}
          />
          <p>{errors.studentgroups?.message}</p>
        </div>

        <div className="flex flex-row justify-evenly m-2">
          <div className="flex-flex-row ">
            <h2 className="text-base p-1">Nombre d’étudiants par entreprise</h2>
            <button
              type="button"
              className="flex justify-center text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              8
            </button>
          </div>
          <div className="flex-flex-row ">
            <h2 className="text-base p-1">Nombre d’entreprises</h2>
            <button
              type="button"
              className="flex justify-center text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              5
            </button>
          </div>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">
            Combien d’heures par semaine approximativement vont être allouées
            par étudiant ? *
          </h2>
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
            type="number"
            placeholder="8h par semaine"
            {...register("weeklyhours")}
          />
          <p>{errors.weeklyhours?.message}</p>
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
export default NewProjectOrganisationSchool;
