/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    date: yup
      .date()
      .default(() => new Date())
      .required("Veuillez remplir ce champ"),
  })
  .required();

export default function NewProjectTypeCompany() {
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
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <div>
          <h2 className="text-base p-1">
            Quel est le type de votre projet ? *
          </h2>
          <div className="flex m-5">
            <input
              className=" 
            required m-5 flex-initial w-16"
              type="radio"
            />
            <h3 className="font-normal text-black p-1">
              Consulting : proposez une mission propre à votre entreprise et
              bénificier d’un renfort temporaire.
            </h3>

            <input className="required m-5 flex-initial w-16" type="radio" />
            <h3 className="font-normal text-black p-1">
              {" "}
              Recruitement : proposez une mission pour trouvez les talents qu’il
              vous faut.
            </h3>

            <input
              className="required m-5 flex-initial w-16"
              type="radio"
              name="branding"
            />
            <h3 className="font-normal text-black p-1">
              Branding : proposez une mission pour promouvoir votre marque
              auprès des étudiants.
            </h3>
          </div>
        </div>

        <div>
          <h2 className="text-base p-1">
            Quand peut s&apos;achever le projet au plus tard ? *
          </h2>
          <input
            className="required flex p-1 m-5"
            type="date"
            {...register("date")}
          />
          <p>{errors.date?.message}</p>
        </div>
        <div className=" flex items-center justify-center">
          <button
            type="submit"
            formMethod="PUT"
            className="  text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
          {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
        </div>
      </form>
    </div>
  );
}
