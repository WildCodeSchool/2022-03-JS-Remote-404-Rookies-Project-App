/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line jsx-a11y/label-has-associated-control

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ExportContextProject from "../../../contexts/ProjectContext";
import ExportContextUser from "../../../contexts/UserContext";
import ButtonHandler from "../ButtonHandler";

import SelectDepartment from "../../SelectDepartment";

const schema = yup
  .object({
    name: yup.string().required("Veuillez remplir ce champ"),
    course: yup.string().required("Veuillez remplir ce champ"),
    training: yup.string().required("Veuillez remplir ce champ"),
    campus: yup
      .string()
      .required(
        "Veuillez sélectionner le lieu du campus (ou du siège si formation en distanciel)"
      ),
    level: yup.string().required("Veuillez remplir ce champ"),
    student_workforce: yup.string().required("Veuillez remplir ce champ"),
    group_quantity: yup
      .number()
      .required("Veuillez remplir ce champ")
      .typeError("Veuillez remplir ce champ"),
    group_size: yup
      .number()
      .required("Veuillez remplir ce champ")
      .typeError("Veuillez remplir ce champ"),
    weekly_time_dedicated: yup.string().required("Veuillez remplir ce champ"),
  })
  .required();

function NewProjectOrganisationSchool({ handleNextStep, currentStep, long }) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const { user } = useContext(ExportContextUser.UserContext);
  const [levels, setLevels] = useState([]);
  const [schoolName, setSchoolName] = useState();
  const [selectedDpt, setSelectedDpt] = useState();
  const [city, setCity] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();
  const [workforce, setWorkforce] = useState();
  const [isGrouped, setIsGrouped] = useState();

  const manageCity = (value) => {
    setCity();
    setSelectedDpt(value);
  };

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
    if (selectedDpt) {
      axios
        .get(`https://geo.api.gouv.fr/departements/${selectedDpt}/communes`)
        .then((res) => setCity(res.data));
    }
  }, [selectedDpt]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/levels`)
      .then((res) => setLevels(res.data))
      .catch((err) => console.warn(err));
    if (user.school_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/schools/${user.school_id}`)
        .then((res) => setSchoolName(res.data.name))
        .catch((err) => console.warn(err));
    }
  }, []);

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row flex-wrap p-2"
      >
        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Votre école *</h2>

          <input
            {...register("name")}
            className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Saisir votre école"
            value={schoolName}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
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
            {...register("course")}
          />
          <p className="text-red-500 text-sm">{errors.course?.message}</p>
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
            {...register("training")}
          />
          <p className="text-red-500 text-sm">{errors.training?.message}</p>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Niveau des étudiants ? *</h2>
          <select
            {...register("level")}
            className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {levels.map((d) => (
              <option key={d.level}>{d.level}</option>
            ))}
          </select>
          <p className="text-red-500 text-sm">{errors.level?.message}</p>
        </div>

        <div className="flex flex-row justify-evenly">
          <h2 className="text-base p-1"> Localisation du campus </h2>
          <SelectDepartment manageCity={manageCity} />
          {city && (
            <select
              {...register("campus")}
              className="bg-white border ml-2 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {city.map((el) => (
                <option key={el.nom}>{el.nom}</option>
              ))}
            </select>
          )}
        </div>
        <p className="text-red-500 text-sm">{errors.campus?.message}</p>

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
            {...register("student_workforce")}
            onChange={(e) => setWorkforce(e.target.value)}
          />
          <p className="text-red-500 text-sm">
            {errors.student_workforce?.message}
          </p>
        </div>

        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">
            Comment travailleront les étudiants ? *
          </h2>

          <button
            type="button"
            className={
              isGrouped === 1
                ? "p-2 focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                : "p-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            }
            onClick={() => {
              setIsGrouped(1);
            }}
          >
            Individuellement
          </button>
          <button
            type="button"
            className={
              !isGrouped
                ? "p-2 focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                : "p-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            }
            onClick={() => {
              setIsGrouped();
            }}
          >
            En groupe
          </button>
        </div>
        <div className="flex flex-wrap p-1">
          <h2 className="text-base p-1">Nombre d’étudiants par groupe ? *</h2>
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
            placeholder="4"
            {...register("group_size")}
            onChange={(e) => setSize(e.target.value)}
            value={isGrouped}
          />
        </div>
        <p className="text-red-500 text-sm">{errors.group_size?.message}</p>

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
            {...register("group_quantity")}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <p className="text-red-500 text-sm">
            {errors.group_quantity?.message}
          </p>
        </div>

        <div className="flex flex-row justify-around m-2 w-full">
          <div className="flex">
            <h2 className="text-base p-1 pr-2">
              Nombre d’étudiants par entreprise
            </h2>
            <button
              type="button"
              className="flex justify-center text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {size && quantity ? size * quantity : 8}
            </button>
          </div>
          <div className="flex">
            <h2 className="text-base p-1 pr-2">Nombre d’entreprises</h2>
            <button
              type="button"
              className="flex justify-center text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {size && quantity && workforce
                ? Math.round(workforce / (size * quantity))
                : 5}
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
            {...register("weekly_time_dedicated")}
          />
          <p className="text-red-500 text-sm">
            {errors.weekly_time_dedicated?.message}
          </p>
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
