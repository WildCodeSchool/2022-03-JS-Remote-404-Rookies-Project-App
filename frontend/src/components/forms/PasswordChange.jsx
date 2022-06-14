/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    confirmpassword: yup
      .string()
      .required("Confirmation de mot de passe est obligatoire")
      .oneOf(
        [yup.ref("password"), null],
        "Le mot de passe de confirmation ne correspond pas"
      ),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(8, "Le mot de passe doit être plus grand que 8 caractères")
      .max(50, "Le mot de passe doit être plus petit que 50 caractères"),
  })
  .required();

function PasswordChange() {
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
    <div className="border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 ">
      <h2 className="text-base p-5">Changer mon mot de passe</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-wrap justify-evenly"
      >
        <label htmlFor="upload" className="flex w-1/2 flex-col ml-10">
          Mot de passe actuel *
          <input
            className="p-1"
            required
            type="password"
            placeholder="Mot de passe actuel"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </label>
        <label htmlFor="new" className="flex w-1/2 flex-col ml-10">
          Nouveau mot de passe *
          <input
            className="p-1"
            required
            type="password"
            placeholder="Nouveau mot de passe"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </label>
        <label htmlFor="confirm" className="flex w-1/2 flex-col ml-10">
          Confirmer le mot de passe *
          <input
            className="p-1"
            required
            type="password"
            placeholder="Confirmer le mot de passe"
            {...register("confirmpassword")}
          />
          <p>{errors.confirmpassword?.message}</p>
        </label>
      </form>
      <div className=" flex items-center justify-center m-1">
        <button
          type="submit"
          formMethod="PUT"
          className="  m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
        {isSubmitSuccessful && <div>Votre mot de passe a bien été modifié</div>}
      </div>
    </div>
  );
}

export default PasswordChange;
