/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import range from "../../assets/dataset/workforce.json";
import industries from "../../assets/dataset/industries.json";

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
      <h2 className="text-base p-2">Mon entreprise</h2>
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
          className="p-2 m-3"
          required
          type="text"
          placeholder="Le nom de votre entreprise"
        />
        <p>{errors.firstname?.message}</p>
        <label className="m-2" htmlFor="description">
          Description{" "}
        </label>
        <textarea
          className="w-1/2 "
          type="text"
          rows="2"
          placeholder="Description de votre entreprise"
        />
        <label htmlFor="campus">Localisation</label>
        <select className="" name="user_campus">
          {/* A MAPPER AVEC VILLES DE FRANCE */}
          <option value="lieu 1">Lieu 1</option>
          <option value="lieu 2">Lieu 2</option>
          <option value="lieu 3">Lieu 3</option>
        </select>
        <label htmlFor="effectif">Effectif:</label>
        <select className=" " name="user_domain">
          {range.map((d) => (
            <option>{d.range}</option>
          ))}
        </select>
        <label htmlFor="industrie">Industrie</label>
        <select className="" name="user_industry">
          {industries.map((d) => (
            <option>{d.industry}</option>
          ))}
        </select>
        <label>Site web</label>
        <input className="  p-2 m-3" type="text" placeholder="Site web" />
      </form>
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
    </div>
  );
}

export default Mycompany;
