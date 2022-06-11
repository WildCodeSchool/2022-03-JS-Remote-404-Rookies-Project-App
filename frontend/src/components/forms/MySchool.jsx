/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import fields from "../../assets/dataset/teaching_fields.json";
import SelectDepartment from "../SelectDepartment";
import SelectCity from "../SelectCity";

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

function MySchool() {
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
    <div className="border-b-2 flex flex-col flex-wrap p-2 w-full">
      <h2 className="text-base p-2">Mon école</h2>
      <div className="flex justify-end">
        <label htmlFor="image">image:</label>
        <input type="file" {...register("image")} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap  items-baseline m-2 p-2 "
      >
        <label htmlFor="school">Le nom de votre école *</label>
        <input
          className="flex flex-row flex-wrap p-2"
          required
          type="text"
          placeholder="Le nom de votre école"
        />
        <p>{errors.firstname?.message}</p>
        <label className="m-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-1/2 "
          type="text"
          rows="2"
          placeholder="Description de votre entreprise"
        />
        <label htmlFor="domain">Domaines d&apos;enseignement</label>
        <select className="flex flex-col flex-wrap" name="user_domain">
          {fields.map((d) => (
            <option>{d.field}</option>
          ))}
        </select>

        <div className="flex flex-row justify-evenly">
          <label htmlFor="campus">
            Localisation des campus
            <SelectDepartment />
            <SelectCity />
          </label>
        </div>

        <label htmlFor="web">Site web</label>
        <input
          className="flex flex-row flex-wrap p-2"
          type="url"
          placeholder="Site web"
        />
        <button
          type="submit"
          formMethod="PUT"
          className="flex flex-col flex-wrap m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
        {isSubmitSuccessful && <div>Votre formulaire a bien été soumis</div>}
      </form>
    </div>
  );
}

export default MySchool;
