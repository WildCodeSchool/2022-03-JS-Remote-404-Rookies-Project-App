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

    formState: { isSubmitSuccessful },
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
    <div className=" ">
      <h2 className="text-2xl p-5">Changer mon mot de passe</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-wrap justify-evenly"
      >
        <label htmlFor="upload" className="flex w-11/12 flex-col m-5 font-bold">
          Mot de passe actuel *
          <input
            className="p-1 rounded-lg shadow-md"
            required
            type="password"
            {...register("password")}
          />
        </label>
        <label htmlFor="new" className="flex w-11/12  flex-col m-5 font-bold">
          Nouveau mot de passe *
          <input
            className="p-1 rounded-lg shadow-md"
            required
            type="password"
            {...register("password")}
          />
        </label>
        <label
          htmlFor="confirm"
          className="flex w-11/12  flex-col m-5 font-bold"
        >
          Confirmer le mot de passe *
          <input
            className="p-1 rounded-lg shadow-md"
            required
            type="password"
            {...register("confirmpassword")}
          />
        </label>
      </form>
      <div className=" flex items-center justify-center m-5">
        <button
          type="submit"
          formMethod="PUT"
          className="mt-5 flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
        {isSubmitSuccessful && <div>Votre mot de passe a bien été modifié</div>}
      </div>
      <hr className="w-11/12 flex items-center justify-center m-auto bg-black h-0.5 mb-5" />
    </div>
  );
}

export default PasswordChange;
