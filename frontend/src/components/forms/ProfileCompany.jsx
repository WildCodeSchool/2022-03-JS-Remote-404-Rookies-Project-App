/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

export default function ProfileCompany() {
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
              className="flex flex-col flex-wrap p-2"
              required
              type="text"
              placeholder="Prénom"
              name="user_surname"
            />
            {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
            {/* <input type="file" id="photo">Photo</input> */}
            <label htmlFor="email">Email *</label>
            <input
              className="flex flex-col flex-wrap p-2"
              required
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <label htmlFor="phone">Téléphone</label>
            <input
              className="flex flex-col flex-wrap p-2"
              type="text"
              placeholder="Téléphone"
              name="user_phone"
            />
            <label htmlFor="prof">Profession</label>
            <input
              className="flex flex-col flex-wrap p-2"
              type="text"
              placeholder="Profession"
              name="user_prof"
            />
            <label htmlFor="linkedin">Profil LinkedIn</label>
            <input
              className="flex flex-col flex-wrap p-2"
              type="text"
              placeholder="Profil LinkedIn"
              name="user_linkedin"
            />
            <label htmlFor="auth">Authentification</label>
            <div>
              {/* onChange={(e) => this.setState({theme: e.target.value})}> */}
              <input
                className="flex flex-col flex-wrap p-2"
                type="radio"
                name="theme"
                value="Google"
              />
              Lier à Google
              <input
                className="flex flex-col flex-wrap p-2"
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
          <h2 className="text-base p-2">Mon entreprise</h2>
          <form>
            <label htmlFor="company name">Le nom de votre école *</label>
            <input
              className="flex flex-col flex-wrap p-2"
              required
              type="text"
              placeholder="Le nom de votre entreprise"
              name="user_company"
            />
            {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
            {/* <input type="file" id="logo">Logo</input> */}
            <label htmlFor="description">Description de votre entreprise</label>
            <textarea
              className="flex flex-col flex-wrap p-2"
              type="text"
              rows="5"
              placeholder="Description de votre entreprise"
              name="user_company_descr"
            />
            <label htmlFor="campus">Localisation de votre entreprise</label>
            <select className="flex flex-col flex-wrap" name="user_campus">
              {/* A MAPPER AVEC VILLES DE FRANCE */}
              <option value="lieu 1">Lieu 1</option>
              <option value="lieu 2">Lieu 2</option>
              <option value="lieu 3">Lieu 3</option>
            </select>
            <label htmlFor="effectif">Effectif de l&apos;entreprise</label>
            <select className="flex flex-col flex-wrap" name="user_domain">
              {/* A MAPPER AVEC WORFORCE */}
              <option value="effectif 1">0-1</option>
              <option value="effectif 2">2-9</option>
              <option value="effectif 3">10-49</option>
              <option value="effectif 4">50-249</option>
              <option value="effectif 5">250 et plus</option>
            </select>
            <label htmlFor="industrie">Industrie</label>
            <select className="flex flex-col flex-wrap" name="user_industry">
              {/* A MAPPER AVEC SECTEURS ENTREPRISES */}
              <option value="industrie 1">Agroalimentaire</option>
              <option value="industrie 2">
                {" "}
                Bois / Papier / Carton / Imprimerie
              </option>
              <option value="industrie 3">Banque / Assurance</option>
              <option value="industrie 4">
                {" "}
                BTP / Matériaux de construction
              </option>
              <option value="industrie 5">Chimie / Parachimie</option>
              <option value="industrie 6">
                Commerce / Négoce / Distribution
              </option>
              <option value="industrie 7">
                Édition / Communication / Multimédia
              </option>
              <option value="industrie 8">Électronique / Électricité</option>
              <option value="industrie 9">Études et conseils</option>
              <option value="industrie 10">Industrie pharmaceutique</option>
              <option value="industrie 11">Informatique / Télécoms</option>
              <option value="industrie 12">
                Machines et équipements / Automobile
              </option>
              <option value="industrie 13">
                Métallurgie / Travail du métal
              </option>
              <option value="industrie 14">Plastique / Caoutchouc</option>
              <option value="industrie 15">Services aux entreprises</option>
              <option value="industrie 16">
                Textile / Habillement / Chaussure
              </option>
              <option value="industrie 17">Transports / Logistique</option>
              <option value="industrie 18">Autres</option>
            </select>
            <label>Site web</label>
            <input
              className="flex flex-col flex-wrap p-2"
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
              className="flex flex-col flex-wrap justify-center m-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Supprimer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
