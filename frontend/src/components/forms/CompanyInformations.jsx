/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function CompanyInformations() {
  return (
    <div className=" flex-col border-b-2 bg-gray-100  ">
      <h2 className="text-base p-2">Mes informations</h2>
      <form className="  h-1/3 flex flex-wrap  items-baseline justify-stretch  m-2 p-2  ">
        <label htmlFor="name">Nom *</label>
        <input
          className=" p-2 w-auto"
          required
          type="text"
          placeholder="Nom"
          name="user_name"
        />
        <label htmlFor="surname">Prénom *</label>
        <input
          className=" p-2"
          required
          type="text"
          placeholder="Prénom"
          name="user_surname"
        />
        {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
        {/* <input type="file" id="photo">Photo</input> */}
        <label htmlFor="email">Email *</label>
        <input
          className="p-2 m-3"
          required
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <label htmlFor="phone">Téléphone</label>
        <input
          className="p-2 m-3"
          type="text"
          placeholder="Téléphone"
          name="user_phone"
        />
        <label htmlFor="prof">Profession</label>
        <input
          className="p-2 m-3"
          type="text"
          placeholder="Profession"
          name="user_prof"
        />
        <label htmlFor="linkedin">Profil LinkedIn</label>
        <input
          className="p-2 m-3"
          type="text"
          placeholder="Profil LinkedIn"
          name="user_linkedin"
        />
      </form>
      <div className=" flex justify-center items-center">
        <form>
          <label htmlFor="auth">Authentification</label>
          {/* onChange={(e) => this.setState({theme: e.target.value})}> */}
          <input className="p-2 m-3" type="radio" name="theme" value="Google" />
          Lier à Google
          <input
            className="p-2 m-3"
            type="radio"
            name="theme"
            value="LinkedIn"
          />
          Lier à LinkedIn
        </form>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className=" m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default CompanyInformations;
