/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
    // eslint-disable-next-line no-restricted-syntax

    const formData = new FormData();

    if (data.image_url[0]) {
      formData.append("image_url", data.image_url[0]);
    }

    formData.append("user", JSON.stringify(data));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/profiles/${user.user_id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        notifySuccess("Modification effectuée, votre profil est mis à jour");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((err) => {
        console.warn(err);
        notifyError(
          "Une erreur est apparue: Veuillez recharger la page ou réessayer"
        );
      });
  };

  return (
    <div className="">
      <h2 className="text-2xl p-5">Mes informations</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap  ">
        <div className="pl-2 flex items-center w-full justify-between mb-5">
          <label
            className="flex font-bold p-1  items-center"
            htmlFor="image_url"
          >
            Avatar:{" "}
          </label>
          <input {...register("image_url")} type="file" />
          {user && user.image_url ? (
            <div
              className="flex w-32 h-32 items-center justify-center hover:scale-125   mr-5 rounded-lg shadow-lg"
              id="cardprofilepicture"
              style={{
                backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}${
                  user.image_url
                })`,
              }}
            />
          ) : (
            <div
              id="cardprofilepicture"
              className="flex w-32 h-32 items-center justify-center hover:scale-125   mr-5 rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${blankPic})`,
              }}
            />
          )}
        </div>
        <div className="name-container flex w-full mb-5">
          <label htmlFor="name" className="flex flex-col w-1/2 font-bold pl-2 ">
            Nom *
            <input
              defaultValue={user.lastname}
              className="w-full p-2 rounded-lg shadow-md"
              placeholder="Nom"
              {...register("lastname")}
            />
            <p>{errors.lastname?.message}</p>
          </label>
          <label
            htmlFor="firstname"
            className=" flex flex-col w-1/2 font-bold pl-2 pr-2"
          >
            Prénom *
            <input
              defaultValue={user.firstname}
              className="w-full p-2 rounded-lg shadow-md"
              placeholder="Prénom"
              {...register("firstname")}
            />
            <p>{errors.firstname?.message}</p>
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full mt-5 pl-2  ">
          <label
            htmlFor="phone"
            className=" flex w-1/3 items-center justify-between font-bold"
          >
            Téléphone
            <input
              defaultValue={user.phone}
              className="p-2 rounded-lg shadow-md"
              type="tel"
              placeholder="Téléphone"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>{" "}
          </label>
          <label
            htmlFor="prof"
            className=" flex w-1/3 items-center justify-between  font-bold"
          >
            Profession
            <input
              defaultValue={user.role}
              className="p-2 rounded-lg shadow-md"
              type="text"
              placeholder="Profession"
              {...register("role")}
            />
            <p>{errors.profession?.message}</p>
          </label>
          <label
            htmlFor="linkedin"
            className=" flex w-1/3 items-center justify-between  font-bold"
          >
            LinkedIn
            <input
              defaultValue={user.linkedin}
              className="p-2 rounded-lg shadow-md"
              placeholder="Profil LinkedIn"
              {...register("linkedin")}
            />
            <p className="text-red-700">{errors.linkedin?.message}</p>
          </label>
        </div>

        <div className="flex w-full justify-center mb-5 mt-10">
          <button
            type="submit"
            className="flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
        </div>
      </form>

      {isSubmitSuccessful && <div>Vos données ont bien été modifiées</div>}
      <hr className="w-11/12 flex items-center justify-center m-auto bg-black h-0.5 mb-5" />
    </div>
  );
}

export default UserInformations;
