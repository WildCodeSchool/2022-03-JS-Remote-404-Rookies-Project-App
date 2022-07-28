/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../services/toastify";
import "react-toastify/dist/ReactToastify.css";
import blankPic from "../../assets/pictures/blank-profile-picture.png";
import range from "../../assets/dataset/workforce.json";
import industries from "../../assets/dataset/industries.json";

import ExportContextUser from "../../contexts/UserContext";
import UserSettings from "../Dashboard/UserSettings";

const schema = yup
  .object({
    name: yup.string(),
    description: yup.string(),
    website: yup.string().url("Veuillez rentrer une url valide"),
  })
  .required();

function Mycompany() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [company, setCompany] = useState();
  const [users, setUsers] = useState();
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    if (data.images_url[0]) {
      formData.append("images_url", data.images_url[0]);
    }
    formData.append("company", JSON.stringify(data));
    formData.append("user_id", JSON.stringify(user.id));
    if (user.company_id) {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`,
        {
          method: "PUT",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then(() => {
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
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/companies`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => {
          handleUser({ company_id: json.company_id });
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
    if (user.company_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/companies/${user.company_id}`)
        .then((res) => setCompany(res.data))
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

      <div className="flex justify-between w-11/12 m-auto mb-3 mt-3 ">
        <h1 className="m-5 text-2xl text-emerald-700">Mon équipe</h1>
        <UserSettings />
      </div>
      <div className="border-b-2  mb-5  bg-gray-100 flex flex-col justify-center flex-wrap w-11/12 rounded-lg shadow-md">
        <h2 className="text-base p-2 ml-5 ">Mon entreprise</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex  w-full  flex-wrap items-baseline m-2 p-2 "
        >
          <div className="pl-2 flex items-center w-full justify-between mb-5">
            <label
              className="flex font-bold p-1  items-center"
              htmlFor="image_url"
            >
              Avatar :
            </label>
            <input {...register("images_url")} type="file" />
            {company && company.image_url ? (
              <div
                className="flex w-32 h-32 items-center justify-center hover:scale-125   mr-5 rounded-lg shadow-lg"
                id="cardprofilepicturecompany"
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}${
                    company.image_url
                  })`,
                }}
              />
            ) : (
              <div
                id="cardprofilepicture"
                className="flex w-32 h-32 items-center justify-center hover:scale-125   mr-5 rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${blankPic})`,
                }}
              />
            )}
          </div>
          <label
            htmlFor="name"
            className="flex flex-col w-full font-bold p-2 mb-3 mt-3 "
          >
            Le nom de votre Entreprise : *
            <input
              className="w-full shadow-md rounded-lg p-2"
              defaultValue={company && company.name}
              type="text"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </label>

          <label
            htmlFor="description"
            className="flex flex-col w-full font-bold p-2 mt-5 mb-5"
          >
            Description :
            <textarea
              defaultValue={company && company.description}
              className="w-full shadow-md rounded-lg p-2"
              type="text"
              rows="2"
              {...register("description")}
            />
            <p>{errors.description?.message}</p>
          </label>
          <div className="flex flex-wrap mb-3 ">
            <label
              htmlFor="range"
              className=" flex w-1/2 justify-between items-center p-3 font-bold mb-3 mt-3"
            >
              Effectif :
              <select
                value={company && company.worforces_id}
                className="shadow-md rounded-lg p-2"
              >
                {range.map((d) => (
                  <option
                    {...register("workforces_id")}
                    className="shadow-md rounded-lg p-2"
                    key={d.id}
                    value={d.id}
                  >
                    {d.range}
                  </option>
                ))}
              </select>
            </label>
            <label
              htmlFor="sector"
              className="flex justify-between w-1/2 items-center p-3 font-bold mb-3 mt-3"
            >
              Secteur :
              <select
                defaultValue={company && company.sectors_id}
                className="shadow-md rounded-lg p-2"
              >
                {industries.map((d) => (
                  <option {...register("sectors_id")} key={d.id} value={d.id}>
                    {d.industry}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex w-full mb-3 mt-3">
              <label
                htmlFor="website"
                className="flex  w-1/4 justify-between items-center font-bold p-2 "
              >
                Site web :
              </label>
              <input
                className="m-1 w-3/4  shadow-md rounded-lg p-2  "
                type="url"
                defaultValue={company?.website ? company.website : ""}
                {...register("website")}
              />
              <p>{errors.website?.message}</p>
            </div>
          </div>

          <div className="p-2 m-1 w-full flex items-center justify-center">
            <button
              type="submit"
              className="flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </div>
        </form>
        <hr className="w-11/12 flex items-center justify-center m-auto bg-black  mb-5" />

        <div className="p-2  mb-10 w-full flex items-center justify-between">
          <h2 className=" ml-5 text-base p-2 ">Mon Equipe</h2>
          <button
            type="button"
            className="   mr-7 flex justify-center items-center text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-7 py-2.5 text-center  mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Inviter
          </button>
        </div>
        <div className="flex flex-col flex-wrap  m-5  ">
          {company &&
            users &&
            users
              .filter((us) => us.company_id === company.id)
              .map((u) => (
                <ul
                  className="flex  border-2 m-2 items-center rounded shadow-lg p-1 cursor-pointer hover:scale-105"
                  key={u.id}
                >
                  <li className=" w-2/12 p-3 text-center ">{u.lastname}</li>
                  <li className=" w-2/12 p-3  text-center">{u.firstname}</li>
                  <li className=" w-2/12 p-3  text-center">{u.role}</li>
                  <li className=" w-4/12 p-3  text-center">{u.email}</li>
                  <li className=" w-2/12 p-1   ">
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

export default Mycompany;
