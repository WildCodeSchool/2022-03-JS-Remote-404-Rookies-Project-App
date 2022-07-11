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
  const { user } = useContext(ExportContextUser.UserContext);
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

    formData.append("companies", JSON.stringify(data));
    if (user.company_id) {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`,
        {
          method: "PUT",
          body: data,
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
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`,
        {
          method: "POST",
          body: data,
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
    }
    console.log(formData);
    console.log(data);
  };

  return (
    <div className="border-b-2 flex flex-col flex-wrap p-2 w-full">
      <ToastContainer />
      <h2 className="text-base p-1">Mon entreprise</h2>
      <div className="flex justify-end">
        <label htmlFor="image">Image:</label>
        <input type="file" {...register("image")} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap items-baseline m-2 p-2 "
      >
        <label htmlFor="name">Le nom de votre Entreprise *</label>
        <input
          className="w-1/2 flex flex-row flex-wrap p-2 m-1"
          required
          type="text"
          placeholder="Le nom de votre entreprise"
          {...register("company_name")}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="description">Description </label>
        <textarea
          className="w-full"
          type="text"
          rows="2"
          placeholder="Description de votre entreprise"
          {...register("description")}
        />
        <p>{errors.description?.message}</p>

        <label htmlFor="range">Effectif:</label>
        <select {...register("range")}>
          {range.map((d) => (
            <option key={d.id} value={d.id}>
              {d.range}
            </option>
          ))}
        </select>
        <label htmlFor="sector">Industrie</label>
        <select {...register("sector")}>
          {industries.map((d) => (
            <option key={d.id} value={d.id}>
              {d.industry}
            </option>
          ))}
        </select>
        <label htmlFor="website">Site web</label>
        <input
          className="w-1/2 m-1 flex flex-row flex-wrap p-1"
          type="url"
          placeholder="Site web"
          {...register("website")}
        />
        <p>{errors.website?.message}</p>

        <div className="p-2 m-1 flex items-center justify-center">
          <button
            type="submit"
            formMethod="PUT"
            className="ml-96 flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
          {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
        </div>
      </form>
    </div>
  );
}

export default Mycompany;
