/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstname: yup.string().required().min(8, "doit avoir 8 caractères"),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
    profession: yup.string().required(),
    linkedin: yup.string().url().required(),
  })
  .required();

function CompanyInformations() {
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
      <h2 className="text-base p-2">Mes informations</h2>
      <div className="flex justify-end">
        <label htmlFor="image">image:</label>
        <input type="file" {...register("image")} />
        <p>{errors.image?.message}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" h-1/3 flex flex-wrap  items-baseline justify-stretch  m-2 p-2  "
      >
        <label htmlFor="name">Nom *</label>
        <input
          className=" p-2 w-auto"
          required
          type="fname"
          placeholder="Nom"
          {...register("firstname")}
        />{" "}
        <p>{errors.firstname?.message}</p>
        <label htmlFor="lastname">Prénom *</label>
        <input
          className=" p-2"
          required
          type="lname"
          placeholder="Prénom"
          {...register("lastname")}
        />
        <p>{errors.lastname?.message}</p>
        <label htmlFor="email">Email *</label>
        <input
          className="p-2 m-3"
          required
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="phone">Téléphone</label>
        <input
          className="p-2 m-3"
          type="tel"
          minLength="10"
          placeholder="Téléphone"
          {...register("phone")}
        />
        <p>{errors.phone?.message}</p>
        <label htmlFor="prof">Profession</label>
        <input
          className="p-2 m-3"
          type="text"
          placeholder="Profession"
          {...register("profession")}
        />
        <p>{errors.profession?.message}</p>
        <label htmlFor="linkedin">Profil LinkedIn</label>
        <input
          className="p-2 m-3"
          type="url"
          placeholder="Profil LinkedIn"
          {...register("linkedin")}
        />
        <p>{errors.linkedin?.message}</p>
      </form>
      <div className=" flex justify-center items-center">
        <form>
          <label htmlFor="auth">Authentification</label>
          <input className="p-2 m-3" type="radio" value="Google" />
          Lier à Google
          <input className="p-2 m-3" type="radio" value="LinkedIn" />
          Lier à LinkedIn
        </form>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          formMethod="PUT"
          className=" m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
      </div>
      {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
    </div>
  );
}

export default CompanyInformations;
