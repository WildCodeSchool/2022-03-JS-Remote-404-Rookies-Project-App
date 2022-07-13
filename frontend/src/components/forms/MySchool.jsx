/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";
import ExportContextUser from "../../contexts/UserContext";
import blankPic from "../../assets/pictures/blank-profile-picture.png";
import fields from "../../assets/dataset/teaching_fields.json";

import UserSettings from "../Dashboard/UserSettings";

const schema = yup
  .object({
    name: yup.string(),
    description: yup.string(),
    website: yup.string().url("Veuillez rentrer une url valide"),
    campus: yup.string(),
  })
  .required();

function MySchool() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [school, setSchool] = useState();
  const [users, setUsers] = useState();
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const formData = new FormData();

    if (data.image_url[0]) {
      formData.append("image_url", data.image_url[0]);
    }
    formData.append("schools", JSON.stringify(data));
    if (user.school_id) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/schools/${user.school_id}`, {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          notifySuccess("Modification effectuée, votre école est mise à jour");
        })
        .catch((err) => {
          console.warn(err);
          notifyError(
            "Une erreur est apparue: Veuillez recharger la page ou réessayer"
          );
        });
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/schools`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => {
          handleUser({ school_id: json.school_id });
          notifySuccess(
            "Modification effectuée, votre entreprise est mise à jour"
          );
        })
        .catch((err) => {
          console.warn(err);
          notifyError(
            "Une erreur est apparue: Veuillez recharger la page ou réessayer"
          );
        });
    }
  };
  useEffect(() => {
    if (user.school_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/schools/${user.school_id}`)
        .then((res) => setSchool(res.data))
        .catch((err) => console.warn(err));
    }
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="border-b-2 flex flex-col items-center flex-wrap p-2 ">
      <ToastContainer />
      <div className="flex justify-between w-11/12 m-auto mb-5 mt-5  ">
        <h1 className="m-5 text-2xl text-emerald-700">Mon équipe</h1>
        <UserSettings />
      </div>
      <div className="border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 justify-center mr-auto ml-auto rounded-lg">
        <h2 className="text-2xl  m-5 ">Mon Ecole</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap  m-2 p-2"
        >
          <div className="p-2 flex justify-end">
            <label htmlFor="image">
              Image:
              <input
                type="file"
                {...register("image_url")}
                className="flex flex-wrap flex-col p-2"
              />
            </label>
            <img
              src={
                user.image_url
                  ? `${import.meta.env.VITE_BACKEND_URL}/public/avatars/${
                      user.image_url
                    }`
                  : blankPic
              }
              alt="En attente "
              className=" flex w-16 h-16 items-center justify-center p-2 rounded-full"
            />
          </div>

          <label
            htmlFor="school"
            className="flex flex-col w-full font-bold p-2"
          >
            Le nom de votre école: *
            <input
              className="w-full"
              defaultValue={school && school.name}
              required
              type="text"
              {...register("name")}
            />
          </label>

          <label
            htmlFor="description"
            className="flex flex-col w-full font-bold p-2 "
          >
            Description:
            <textarea
              defaultValue={school && school.description}
              className="w-full p-2 m-1"
              type="text"
              rows="2"
              {...register("description")}
            />
          </label>

          <label
            htmlFor="domain"
            className="flex flex-col w-full font-bold p-2 "
          >
            Domaines d&apos;enseignement:
            <select
              className="w-full p-2 m-1 flex flex-col flex-wrap"
              name="user_domain"
            >
              {fields.map((d) => (
                <option>{d.field}</option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap items-center justify-center w-full">
            <label
              htmlFor="campus"
              className="flex flex-col w-1/2 font-bold p-2 "
            >
              Localisation des campus:
              <input
                className="w-full"
                defaultValue={school && school.campuses}
                placeholder="saisir les code postaux, séparés par une virgule"
                type="text"
                {...register("campus")}
              />
            </label>

            <label htmlFor="web" className="flex flex-col w-1/2 font-bold p-2 ">
              Site web:
              <input
                className=""
                type="url"
                {...register("website")}
                defaultValue={school && school.website}
              />
            </label>
          </div>

          <div className="flex w-full p-2 m-1  items-center justify-center">
            <button
              type="submit"
              formMethod="PUT"
              className=" flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </div>
        </form>
        <hr className="w-11/12 flex items-center justify-center m-auto bg-black  mb-5" />

        <div className="p-2 m-1 w-full flex items-center justify-between">
          <h2 className=" ml-5 text-2xl p-2 ">Mon Equipe</h2>
          <button
            type="button"
            className="   mr-7 flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center  mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Inviter
          </button>
        </div>
        <div className="flex flex-col flex-wrap  m-5  ">
          {school &&
            users &&
            users
              .filter((us) => us.school_id === school.id)
              .map((u) => (
                <ul className="flex  border-2 m-2 items-center rounded shadow-lg p-1 ">
                  <li className=" w-2/12 p-3 text-center ">{u.lastname}</li>
                  <li className=" w-2/12 p-3  text-center">{u.firstname}</li>
                  <li className=" w-2/12 p-3  text-center">{u.role}</li>
                  <li className=" w-4/12 p-3  text-center">{u.email}</li>
                  <li className=" w-2/12 p-3   ">
                    <img
                      className="w-12 self-center m-auto rounded-full"
                      width="30px"
                      src={
                        u.image_url
                          ? `${import.meta.env.VITE_BACKEND_URL}${u.image_url}`
                          : blankPic
                      }
                      alt="user avatar"
                    />
                  </li>
                </ul>
              ))}
        </div>
      </div>
    </div>
  );
}

export default MySchool;
