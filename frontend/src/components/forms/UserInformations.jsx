/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstname: yup.string().lowercase().required("Veuillez remplir ce champ"),
    lastname: yup.string().lowercase().required("Veuillez remplir ce champ"),
    email: yup
      .string()
      .email("veuillez rentrer un email valide (ex : michel@email.com")
      .required("Veuillez remplir ce champ"),
    telephone: yup.number().min(10, "Veuillez entrer 10 caractères"),
    profession: yup.string().lowercase(),
    linkedin: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

function UserInformations() {
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
    <div className="border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 rounded-lg">
      <h2 className="text-base p-5">Mes informations</h2>
      <div className="flex justify-end mb-5">
        <label htmlFor="image">Photo</label>
        <input type="file" {...register("image")} />
        <p>{errors.image?.message}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap items-center justify-evenly  "
      >
        <label htmlFor="name" className=" mb-5">
          Nom *
          <input
            className="p-2 ml-5"
            required
            type="fname"
            placeholder="Nom"
            {...register("firstname")}
          />{" "}
          <p>{errors.firstname?.message}</p>
        </label>
        <label htmlFor="lastname" className=" mb-5">
          Prénom *
          <input
            className="p-2 ml-5"
            required
            type="lname"
            placeholder="Prénom"
            {...register("lastname")}
          />
          <p>{errors.lastname?.message}</p>
        </label>
        <label htmlFor="email" className="mb-5 ">
          Email *
          <input
            className="p-2 ml-5"
            required
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </label>
        <label htmlFor="phone" className="mb-5 ">
          Téléphone
          <input
            className="p-2 ml-5"
            type="tel"
            minLength="10"
            placeholder="Téléphone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>{" "}
        </label>
        <label htmlFor="prof" className="mb-5 ">
          Profession
          <input
            className="p-2 ml-5"
            type="text"
            placeholder="Profession"
            {...register("profession")}
          />
          <p>{errors.profession?.message}</p>
        </label>
        <label htmlFor="linkedin" className="mb-5 ">
          Profil LinkedIn
          <input
            className="p-2 ml-5"
            type="url"
            placeholder="Profil LinkedIn"
            {...register("linkedin")}
          />
          <p>{errors.linkedin?.message}</p>
        </label>
      </form>
      <div className="h-10 ">
        <label
          htmlFor="auth"
          className="flex flex-col w-1/2 justify-start ml-10"
        >
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
          formMethod="PUT"
          className=" m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
      </div>

      {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
    </div>
  );
}

export default UserInformations;
