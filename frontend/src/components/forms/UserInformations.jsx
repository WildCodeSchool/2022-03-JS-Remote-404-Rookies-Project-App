/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import ExportContextUser from "../../contexts/UserContext";

import blankPic from "../../assets/pictures/blank-profile-picture.png";

const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  phone: yup.number().min(10, "Veuillez entrer 10 caractères"),
  role: yup.string(),
  linkedin: yup.string("saisissez l'adresse de votre profil"),
});
function UserInformations() {
  const [pictureChanged, setPictureChanged] = useState(false);
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    handleUser({
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      role: data.role,
      linkedin: data.linkedin,
    });

    if (pictureChanged) {
      const formData = new FormData();

      formData.append("myfile", data.photo[0]);
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((json) =>
          handleUser({
            photo: json.url,
          })
        )
        .catch((err) => console.warn(err));
    }
  };

  return (
    <div className="border-b-2  bg-gray-100 flex flex-col  flex-wrap w-11/12 rounded-lg">
      <h2 className="text-base p-5">Mes informations</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap items-center justify-evenly  "
      >
        <input
          {...register("photo")}
          type="file"
          onChange={() => setPictureChanged(true)}
        />
        <img src={user.photo ? user.photo : blankPic} alt="En attente " />
        <label htmlFor="name" className=" mb-5">
          Nom *
          <input
            defaultValue={user.lastname}
            className="p-2 ml-5"
            placeholder="Nom"
            {...register("firstname")}
          />
          <p>{errors.firstname?.message}</p>
        </label>
        <label htmlFor="lastname" className=" mb-5">
          Prénom *
          <input
            defaultValue={user.firstname}
            className="p-2 ml-5"
            placeholder="Prénom"
            {...register("lastname")}
          />
          <p>{errors.lastname?.message}</p>
        </label>
        <label htmlFor="phone" className="mb-5 ">
          Téléphone
          <input
            defaultValue={user.phone}
            className="p-2 ml-5"
            type="tel"
            placeholder="Téléphone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>{" "}
        </label>
        <label htmlFor="prof" className="mb-5 ">
          Profession
          <input
            defaultValue={user.role}
            className="p-2 ml-5"
            type="text"
            placeholder="Profession"
            {...register("role")}
          />
          <p>{errors.profession?.message}</p>
        </label>
        <label htmlFor="linkedin" className="mb-5 ">
          Profil LinkedIn
          <input
            defaultValue={user.linkedin}
            className="p-2 ml-5"
            placeholder="Profil LinkedIn"
            {...register("linkedin")}
          />
          <p>{errors.linkedin?.message}</p>
        </label>

        <div className="h-50 ">
          <label htmlFor="auth" className="flex flex-col  justify-start ml-10">
            Authentification
            <label htmlFor="">
              Lier à Google
              <input className="p-1 m-3" type="radio" value="Google" />
            </label>
            <label htmlFor="">
              Lier à LinkedIn
              <input className="p-1 m-3" type="radio" value="LinkedIn" />
            </label>
          </label>
        </div>
        <div className="flex justify-center m-7">
          <button
            type="submit"
            className=" m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sauvegarder
          </button>
        </div>
      </form>

      {isSubmitSuccessful && <div>Vos données ont bien été modifiées</div>}
    </div>
  );
}

export default UserInformations;
