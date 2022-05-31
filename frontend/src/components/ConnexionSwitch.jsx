import React from "react";

function ConnexionSwitch({ isMember, handleMember, align }) {
  return (
    <div className={`flex text-sm font-bold ${align}`}>
      <h2 className="text-gray-500">
        {isMember ? "Déjà membre ?" : "Pas encore de compte ?"}
      </h2>
      <button
        type="button"
        onClick={handleMember}
        className="text-sm px-2 font-bold text-emerald-700 underline hover:text-green-400"
      >
        {isMember ? "Se connecter" : "Créer un compte"}
      </button>
    </div>
  );
}

export default ConnexionSwitch;
