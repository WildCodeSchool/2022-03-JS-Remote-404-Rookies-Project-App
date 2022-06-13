/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup
  .object({
    firstname: yup.string().lowercase().required(),
    lastname: yup.string().lowercase().required(),
    email: yup
      .string()
      .email("veuillez rentrer un email valide (ex : michel@email.com")
      .required(),
    telephone: yup.number().min(10, "Veuillez entrer 10 caractères"),
    profession: yup.string().lowercase(),
    linkedin: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

function SchoolInformations() {
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
      <h2 className="text-base p-1">Mes informations</h2>
      <div className="flex justify-end">
        <label htmlFor="image">image:</label>
        <input type="file" {...register("image")} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <label htmlFor="name">Nom *</label>
        <input
          className="flex flex-row flex-wrap p-1"
          type="fname"
          placeholder="Nom"
          {...register("firstname")}
        />
        <p>{errors.firstname?.message}</p>
        <label htmlFor="surname">Prénom *</label>
        <input
          className="flex flex-row flex-wrap p-1"
          type="lname"
          placeholder="Prénom"
          {...register("lastname")}
        />

        <label htmlFor="email">Email *</label>
        <input
          className="flex flex-row flex-wrap p-1"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <label htmlFor="phone">Téléphone</label>
        <input
          className="flex flex-row flex-wrap p-1"
          type="tel"
          minLength="10"
          placeholder="Téléphone"
          {...register("telephone")}
        />
        <label htmlFor="prof">Profession</label>
        <input
          className="flex flex-row flex-wrap p-1"
          type="text"
          placeholder="Profession"
          {...register("profession")}
        />
        <label htmlFor="linkedin">Profil LinkedIn</label>
        <input
          className="flex flex-row flex-wrap p-1"
          type="url"
          placeholder="Profil LinkedIn"
          {...register("linkedin")}
        />
        <label htmlFor="auth">Authentification</label>
        <div>
          <input
            className="flex flex-row flex-wrap p-1"
            type="radio"
            value="Google"
          />
          Lier à Google
          <input
            className="flex flex-row flex-wrap p-1"
            type="radio"
            value="LinkedIn"
          />
          Lier à LinkedIn
          <button
            type="submit"
            formMethod="PUT"
            className="flex flex-col flex-wrap m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
          {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
        </div>
      </form>
    </div>
  );
}

export default SchoolInformations;
