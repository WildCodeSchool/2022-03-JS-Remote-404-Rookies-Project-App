/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import range from "../../assets/dataset/workforce.json";
import industries from "../../assets/dataset/industries.json";
import SelectDepartment from "../SelectDepartment";
import SelectCity from "../SelectCity";

const schema = yup
  .object({
    companyname: yup.string().required("Veuillez remplir ce champ").lowercase(),
    companydescription: yup
      .string()
      .lowercase()
      .min(50, "Votre description doit contenir au moins 50 caractères"),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

function Mycompany() {
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
      <h2 className="text-base p-1">Mon entreprise</h2>
      <div className="flex justify-end">
        <label htmlFor="image">image:</label>
        <input type="file" {...register("image")} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap  items-baseline m-2 p-2 "
      >
        <label htmlFor="company name">Le nom de votre Entreprise *</label>
        <input
          className="p-1"
          required
          type="text"
          placeholder="Le nom de votre entreprise"
          {...register("companyname")}
        />
        <p>{errors.comapnyname?.message}</p>
        <label className="m-2" htmlFor="description">
          Description{" "}
        </label>
        <textarea
          className="w-1/2 "
          type="text"
          rows="2"
          placeholder="Description de votre entreprise"
          {...register("companydescription")}
        />
        <p>{errors.companydescription?.message}</p>
        <div className="flex flex-row justify-evenly">
          <label htmlFor="campus">
            Localisation des campus
            <SelectDepartment />
            <SelectCity />
          </label>
        </div>

        <label htmlFor="effectif">Effectif:</label>
        <select>
          {range.map((d) => (
            <option>{d.range}</option>
          ))}
        </select>
        <label htmlFor="industrie">Industrie</label>
        <select>
          {industries.map((d) => (
            <option>{d.industry}</option>
          ))}
        </select>
        <label>Site web</label>
        <input
          className="p-1"
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

export default Mycompany;
