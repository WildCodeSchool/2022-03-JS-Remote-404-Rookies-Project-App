/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    projectname: yup.string().lowercase().required("Veuillez remplir ce champ"),
    projectgoals: yup
      .string()
      .lowercase()
      .required("Veuillez remplir ce champ")
      .min(50, "Vos objectifs doivent contenir au moins 50 caractères"),
    projectresources: yup
      .string()
      .lowercase()
      .required("Veuillez remplir ce champ")
      .min(50, "Vos ressources doivent contenir au moins 50 caractères"),
  })
  .required();

export default function NewProjectDescriptionCompany() {
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
          <h2 className="text-base p-1">Nom du projet ? *</h2>
          <div className="flex flex-wrap p-1 m-2">
            <input
              className="required form-control
              w-96
              px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
              type="text"
              placeholder="Projet étude de marché (Allemagne)"
              {...register("projectname")}
            />
            <p>{errors.projectname?.message}</p>
          </div>
        </div>

        <div>
          <h2 className="text-base p-1">
            Quel est votre objectif principal ? *
          </h2>
          <p className="p-1 font-extralight text-s">
            Décrivez le problème que les étudiants devront solutionner et le
            résultat attendu des étudiants.
          </p>
          <div className="flex flex-wrap m-2 p-1">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="2"
              placeholder="Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta."
              {...register("projectgoals")}
            />
            <p>{errors.projectgoals?.message}</p>
          </div>
        </div>

        <div>
          <h2 className="text-base p-1">
            Quelles seront les ressources disponibles pour les étudiants ? *
          </h2>
          <p className="p-1 font-extralight text-s">
            Décrivez les ressources que vous pourrait mettre à disposition
            (temps disponible, accès aux outils internes, documents utiles,
            membre de l’équipe disponible).
          </p>
          <div className="flex flex-wrap m-2 p-1">
            <textarea
              className="required form-control
              w-full "
              type="text"
              rows="2"
              placeholder="Et fugit soluta dolorem ratione et quia minus eum unde voluptas ad autem dolor. Non ipsam adipisci sit dolores accusamus non voluptatem enim. Qui quia tenetur et odit quia vel maiores nemo aut voluptatum tenetur et minus laboriosam.

          Aut nostrum odio ea iure obcaecati aut reiciendis dignissimos qui mollitia labore est quia dolore. Id magnam incidunt hic rerum ipsum est placeat."
              {...register("projectresources")}
            />
            <p>{errors.projectresources?.message}</p>
          </div>
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
