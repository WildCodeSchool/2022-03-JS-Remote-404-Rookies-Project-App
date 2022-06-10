/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import fields from "../../assets/dataset/teaching_fields.json";

export default function ProfileSchool() {
  return (
    <div className="flex flex-wrap flex-col w-full m-5 p-5">
      <div className="text-emerald-700 text-base p-5">
        <h1 className="text-base">Mon profil</h1>
      </div>

      <div className="bg-gray-100 rounded-md flex flex-wrap flex-row">
        <div className="border-b-2 flex flex-col flex-wrap w-full">
          <h2 className="text-base p-2">Mes informations</h2>
          <form className="p-2">
            <label htmlFor="name">Nom *</label>
            <input
              className="flex flex-row flex-wrap p-2"
              required
              type="text"
              placeholder="Nom"
              name="user_name"
            />
            <label htmlFor="surname">Prénom *</label>
            <input
              className="flex flex-row flex-wrap p-2"
              required
              type="text"
              placeholder="Prénom"
              name="user_surname"
            />
            {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
            {/* <input type="file" id="photo">Photo</input> */}
            <label htmlFor="email">Email *</label>
            <input
              className="flex flex-row flex-wrap p-2"
              required
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <label htmlFor="phone">Téléphone</label>
            <input
              className="flex flex-row flex-wrap p-2"
              type="text"
              placeholder="Téléphone"
              name="user_phone"
            />
            <label htmlFor="prof">Profession</label>
            <input
              className="flex flex-row flex-wrap p-2"
              type="text"
              placeholder="Profession"
              name="user_prof"
            />
            <label htmlFor="linkedin">Profil LinkedIn</label>
            <input
              className="flex flex-row flex-wrap p-2"
              type="text"
              placeholder="Profil LinkedIn"
              name="user_linkedin"
            />
            <label htmlFor="auth">Authentification</label>
            <div>
              {/* onChange={(e) => this.setState({theme: e.target.value})}> */}
              <input
                className="flex flex-row flex-wrap p-2"
                type="radio"
                name="theme"
                value="Google"
              />
              Lier à Google
              <input
                className="flex flex-row flex-wrap p-2"
                type="radio"
                name="theme"
                value="LinkedIn"
              />
              Lier à LinkedIn
              <button
                type="button"
                className="flex flex-col flex-wrap m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
        <div className="border-b-2 flex flex-col flex-wrap p-2 w-full">
          <h2 className="text-base p-2">Mon école</h2>
          <form>
            <label htmlFor="school">Le nom de votre école *</label>
            <input
              className="flex flex-row flex-wrap p-2"
              required
              type="text"
              placeholder="Le nom de votre école"
              name="user_school"
            />
            {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
            {/* <input type="file" id="logo">Logo</input> */}
            <label htmlFor="descr">Description de votre école</label>
            <textarea
              className="flex flex-col flex-wrap p-2"
              type="text"
              rows="5"
              placeholder="Description de votre école"
              name="user_school_descr"
            />
            <label htmlFor="domain">Domaines d&apos;enseignement</label>
            <select className="flex flex-col flex-wrap" name="user_domain">
              {/* A MAPPER AVEC DOMAINES ETUDES */}
              {fields.map((d) => (
                <option>{d.field}</option>
              ))}
            </select>
            <label htmlFor="campus">Localisation des campus</label>
            <select className="flex flex-col flex-wrap" name="user_campus">
              {/* A MAPPER AVEC DONNEES VILLES DE FRANCE */}
              <option value="lieu 1">Lieu 1</option>
              <option value="lieu 2">Lieu 2</option>
              <option value="lieu 3">Lieu 3</option>
            </select>
            <label htmlFor="web">Site web</label>
            <input
              className="flex flex-row flex-wrap p-2"
              type="text"
              placeholder="Site web"
              name="user_web"
            />
            <button
              type="button"
              className="flex flex-col flex-wrap m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </form>
        </div>

        <div className="border-b-2 p-2 flex flex-col flex-wrap w-full">
          <h2 className="text-base p-2">Changer mon mot de passe</h2>
          <form>
            <label htmlFor="upload">Mot de passe actuel *</label>
            <input
              className="flex flex-col flex-wrap p-2"
              required
              type="text"
              placeholder="Mot de passe actuel"
              name="user_mdp_upload"
            />
            <label htmlFor="new">Nouveau mot de passe *</label>
            <input
              className="flex flex-col flex-wrap p-2"
              required
              type="text"
              placeholder="Nouveau mot de passe"
              name="user_mdp_new"
            />
            <label htmlFor="confirm">Confirmer le mot de passe *</label>
            <input
              className="flex flex-col flex-wrap p-2"
              required
              type="text"
              placeholder="Confirmer le mot de passe"
              name="user_confirm"
            />
          </form>
        </div>

        <div className="p-2 flex flex-col flex-wrap w-full">
          <h2 className="text-base p-2">Supprimer mon compte</h2>
          <form>
            <input
              className="flex flex-col flex-wrap p-2"
              type="text"
              placeholder="Attention, une fois votre compte supprimé, vous ne pourrez plus retourner en arrière"
              name="user_delete"
            />
            <button
              type="button"
              className="flex flex-col flex-wrap m-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Supprimer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}