/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";

import blankPic from "../../assets/pictures/blank-profile-picture.png";

import ExportContextUser from "../../contexts/UserContext";

const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  phone: yup.number().min(10, "Veuillez entrer 10 caractères"),
  role: yup.string(),
  linkedin: yup.string("saisissez l'adresse de votre profil"),
});
function UserInformations() {
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
    // eslint-disable-next-line no-restricted-syntax

    const formData = new FormData();

    if (data.image_url[0]) {
      formData.append("image_url", data.image_url[0]);
    }

    formData.append("user", JSON.stringify(data));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/profiles/${user.id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        handleUser(json);
        notifySuccess("Modification effectuée, votre profil est mis à jour");
      })
      .catch((err) => {
        console.warn(err);
        notifyError(
          "Une erreur est apparue: Veuillez recharger la page ou réessayer"
        );
      });
  };

  return (
    <div className="border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 rounded-lg">
      <h2 className="text-base p-5">Mes informations</h2>
      <ToastContainer />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap items-center justify-evenly  "
      >
        <input {...register("image_url")} type="file" />
        <img
          src={
            user.image_url
              ? `${import.meta.env.VITE_BACKEND_URL}${user.image_url}`
              : blankPic
          }
          alt="En attente "
        />
        <label htmlFor="name" className=" mb-5">
          Nom *
          <input
            defaultValue={user.lastname}
            className="p-2 ml-5"
            placeholder="Nom"
            {...register("firstname")}
          />
          <p>{errors.firstname?.message}</p>
        </label>
        <label htmlFor="lastname" className=" mb-5">
          Prénom *
          <input
            defaultValue={user.firstname}
            className="p-2 ml-5"
            placeholder="Prénom"
            {...register("lastname")}
          />
          <p>{errors.lastname?.message}</p>
        </label>
        <label htmlFor="phone" className="mb-5 ">
          Téléphone
          <input
            defaultValue={user.phone}
            className="p-2 ml-5"
            type="tel"
            placeholder="Téléphone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>{" "}
        </label>
        <label htmlFor="prof" className="mb-5 ">
          Profession
          <input
            defaultValue={user.role}
            className="p-2 ml-5"
            type="text"
            placeholder="Profession"
            {...register("role")}
          />
          <p>{errors.profession?.message}</p>
        </label>
        <label htmlFor="linkedin" className="mb-5 ">
          Profil LinkedIn
          <input
            defaultValue={user.linkedin}
            className="p-2 ml-5"
            placeholder="Profil LinkedIn"
            {...register("linkedin")}
          />
          <p className="text-red-700">{errors.linkedin?.message}</p>
        </label>

        <div className="h-50 ">
          <label htmlFor="auth" className="flex flex-col  justify-start ml-10">
            Authentification
            <label htmlFor="">
              Lier à Google
              <input className="p-1 m-3" type="radio" value="Google" />
            </label>
            <label htmlFor="">
              Lier à LinkedIn
              <input className="p-1 m-3" type="radio" value="LinkedIn" />
            </label>
          </label>
        </div>
        <div className="flex justify-center m-7">
          <button
            type="submit"
            className=" m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
        </div>
      </form>

      {isSubmitSuccessful && <div>Vos données ont bien été modifiées</div>}
    </div>
  );
}

export default UserInformations;
