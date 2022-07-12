/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import range from "../../assets/dataset/workforce.json";
import industries from "../../assets/dataset/industries.json";

import ExportContextUser from "../../contexts/UserContext";
import UserSettings from "../Dashboard/UserSettings";

const schema = yup
  .object({
    company_name: yup
      .string()
      .required("Veuillez remplir ce champ")
      .lowercase(),
    description: yup
      .string()
      .lowercase()
      .min(50, "Votre description doit contenir au moins 50 caractères"),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

function Mycompany() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    if (data.image_url[0]) {
      formData.append("image_url", data.image_url[0]);
    }
    formData.append("companies", JSON.stringify({ ...data, user_id: user.id }));
    if (user.company_id) {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`,
        {
          method: "PUT",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then(() => {
          notifySuccess(
            "Modification effectuée, votre entreprise est mise à jour"
          );
        })
        .catch((err) => {
          console.warn(err);
          notifyError(
            "Une erreur est apparue: Veuillez recharger la page ou réessayer"
          );
        });
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/companies`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => {
          handleUser({ company_id: json.company_id });
          notifySuccess(
            "Modification effectuée, votre entreprise est mise à jour"
          );
        })
        .catch((err) => {
          console.warn(err);
          notifyError(
            "Une erreur est apparue: Veuillez recharger la page ou réessayer"
          );
        });
    }
  };

  return (
    <div className="border-b-2 flex flex-col items-center flex-wrap p-2 w-screen h-screen">
      <ToastContainer />
      <div className="flex justify-between w-full mb-2 ">
        <h1 className="m-5 text-emerald-700">Mon équipe</h1>
        <UserSettings />
      </div>
      <div className="border-b-2  bg-gray-100 flex flex-col justify-center flex-wrap w-11/12 rounded-lg">
        <h2 className="text-base p-2 ml-5 ">Mon entreprise</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap items-baseline m-2 p-2 "
        >
          <div className="flex justify-end">
            <label htmlFor="image">
              Image:
              <input type="file" {...register("image_url")} />
            </label>
          </div>

          <label htmlFor="name" className="flex flex-col w-full font-bold p-2 ">
            Le nom de votre Entreprise *
            <input
              className="w-full"
              required
              type="text"
              {...register("company_name")}
            />
            <p>{errors.name?.message}</p>
          </label>

          <label
            htmlFor="description"
            className="flex flex-col w-full font-bold p-2"
          >
            Description
            <textarea
              className="w-full"
              type="text"
              rows="2"
              {...register("description")}
            />
            <p>{errors.description?.message}</p>
          </label>
          <div className="flex flex-wrap ">
            <label
              htmlFor="range"
              className=" flex w-1/2 items-center p-3 font-bold"
            >
              Effectif:
              <select {...register("range")} className="p-1">
                {range.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.range}
                  </option>
                ))}
              </select>
            </label>

            <label
              htmlFor="sector"
              className="flex w-1/2 items-center p-3 font-bold"
            >
              Secteur:
              <select {...register("sector")} className="p-1">
                {industries.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.industry}
                  </option>
                ))}
              </select>
            </label>

            <label
              htmlFor="website"
              className="flex w-1/2  items-center font-bold p-2 "
            >
              Site web:
              <input
                className="m-1 flex flex-row flex-wrap p-1"
                type="url"
                placeholder="Site web"
                {...register("website")}
              />
              <p>{errors.website?.message}</p>
            </label>
          </div>

          <div className="p-2 m-1 w-full flex items-center justify-center">
            <button
              type="submit"
              formMethod="PUT"
              className="flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
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

export default Mycompany;
