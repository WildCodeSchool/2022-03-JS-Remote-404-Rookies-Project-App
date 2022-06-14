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
    schoolname: yup.string().required("Veuillez remplir ce champ").lowercase(),
    schooldescription: yup
      .string()
      .lowercase()
      .min(50, "Votre description doit contenir au moins 50 caractères"),
    website: yup.string().url("Veuillez rentrer une url valide"),
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
    <div
      className="border-b-2 bg-gray-100 flex flex-col flex-wrap p-2 w-full mt-20 ml-5 mr-5"
      mr-5
    >
      <h2 className="text-base p-21">Mon école</h2>
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
          className="flex flex-row flex-wrap p-1"
          required
          type="text"
          placeholder="Le nom de votre école"
          {...register("schoolname")}
        />
        <p>{errors.schoolname?.message}</p>
        <label className="m-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-1/2 "
          type="text"
          rows="2"
          placeholder="Description de votre entreprise"
          {...register("schooldescription")}
        />
        <p>{errors.schooldescription?.message}</p>
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
          className="flex flex-row flex-wrap p-1"
          type="url"
          placeholder="Site web"
          {...register("website")}
        />
        <p>{errors.website?.message}</p>
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

export default MySchool;
