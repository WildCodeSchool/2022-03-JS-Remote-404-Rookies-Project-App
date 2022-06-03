/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Profile.css";

export default function ProfileEcole() {
  return (
    <div className="text-left ..." id="profile-page">
      <div className="text-emerald-700 font-semibold  p-7" id="profile-title">
        <h1 className="text-lg font-semibold">Mon profil</h1>
      </div>

      <div className="bg-stone-200 m-10 p-10" id="profile-form">
        <div className="border-b-2 border-black p-2" id="informations-form">
          <h2 className="font-bold">Mes informations</h2>
          <form>
            <label htmlFor="name">Nom *</label>
            <input
              className="name"
              required
              type="text"
              placeholder="Nom"
              name="user_name"
            />
            <label htmlFor="surname">Prénom *</label>
            <input
              className="surname"
              required
              type="text"
              placeholder="Prénom"
              name="user_surname"
            />
            {/* <input type="file" id="photo">Photo</input> */}

            <label htmlFor="email">Email *</label>
            <input
              className="email"
              required
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <label htmlFor="phone">Téléphone</label>
            <input
              className="phone"
              type="text"
              placeholder="Téléphone"
              name="user_phone"
            />
            <label htmlFor="prof">Profession</label>
            <input type="text" placeholder="Profession" name="user_prof" />
            <label htmlFor="linkedin">Profil LinkedIn</label>
            <input
              type="text"
              placeholder="Profil LinkedIn"
              name="user_linkedin"
            />
            <label htmlFor="auth">Authentification</label>
            <div>
              {/* onChange={(e) => this.setState({theme: e.target.value})}> */}
              <input
                className="social-media"
                type="radio"
                name="theme"
                value="Google"
              />
              Lier à Google
              <input
                className="social-media"
                type="radio"
                name="theme"
                value="LinkedIn"
              />
              Lier à LinkedIn
              <button
                type="button"
                className="m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
        <div className="border-b-2 border-black p-2" id="école-form">
          <h2 className="font-bold">Mon école</h2>
          <form>
            <label htmlFor="school">Le nom de votre école *</label>
            <input
              required
              type="text"
              placeholder="Le nom de votre école"
              name="user_school"
            />
            {/* <input type="file" id="logo">Logo</input> */}
            <label htmlFor="descr">Description de votre école</label>
            <textarea
              type="text"
              rows="5"
              placeholder="Description de votre école"
              name="user_school_descr"
            />
            <label htmlFor="domain">Domaines d&apos;enseignement</label>
            <select name="user_domain">
              <option value="domaine 1">Domaine 1</option>
              <option value="domaine 2">Domaine 2</option>
              <option value="domaine 3">Domaine 3</option>
            </select>
            <label htmlFor="campus">Localisation des campus</label>
            <select className="campus" name="user_campus">
              <option value="lieu 1">Lieu 1</option>
              <option value="lieu 2">Lieu 2</option>
              <option value="lieu 3">Lieu 3</option>
            </select>
            <label htmlFor="web">Site web</label>
            <input
              className="web"
              type="text"
              placeholder="Site web"
              name="user_web"
            />
            <button
              type="button"
              className="m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </form>
        </div>

        <div className="border-b-2 border-black p-2" id="changement-mdp-form">
          <h2 className="font-bold">Changer mon mot de passe</h2>
          <form>
            <label htmlFor="upload">Mot de passe actuel *</label>
            <input
              required
              type="text"
              placeholder="Mot de passe actuel"
              name="user_mdp_upload"
            />
            <label htmlFor="new">Nouveau mot de passe *</label>
            <input
              required
              type="text"
              placeholder="Nouveau mot de passe"
              name="user_mdp_new"
            />
            <label htmlFor="confirm">Confirmer le mot de passe *</label>
            <input
              required
              type="text"
              placeholder="Confirmer le mot de passe"
              name="user_confirm"
            />
          </form>
        </div>

        <div className="" id="suppr-mon-compte-form">
          <h2 className="font-bold">Supprimer mon compte</h2>
          <form>
            <input
              className="placeholder-delete"
              type="text"
              placeholder="Attention, une fois votre compte supprimé, vous ne pourrez plus retourner en arrière"
              name="user_delete"
            />
            <button
              type="button"
              className="m-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Supprimer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
