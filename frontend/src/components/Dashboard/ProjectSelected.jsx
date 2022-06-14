import React from "react";

import Share from "@assets/pictures/share.png";

function ProjectSelection({ project }) {
  return (
    <div className="blocproject">
      <div className="bloc">
        <div className="blocproject2">
          <h1 className="title2">AVANCEMENT DU PROJET</h1>
        </div>
        <div className="blocproject3">
          <div className="blocproject3bis">
            <h1 className="title3">Brief du projet :</h1>
            <div className="shareedit">
              <button type="submit" className="share">
                <img src={Share} alt={Share} />
                Partager
              </button>

              <button type="submit" className="edit">
                Modifier
              </button>
            </div>
          </div>
          <div className="bloc6">
            <h2 className="titleh2">L’objectif principal du projet ?</h2>
            <p className="ph3">Fin souhaité avant le : {project.end_date}</p>
          </div>
          <p className="ph2">{project.objectif}</p>
          <h3 className="titleh2">
            Quelles seront les ressources disponibles pour les étudiants ?
          </h3>
          <p className="ph2">{project.ressources_available}</p>
          <h4 className="titleh2">Quel est le domaine du projet ?</h4>
          <div className="domaineproject">
            <p className="circlegrey">Business</p>
            <p className="circlegrey">Marketing</p>
            <p className="circlegrey">Etude de marché</p>
          </div>
          <h5 className="titleh2">L’entreprise en quelques mots</h5>
          <p className="ph2">{project.ressources_available}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSelection;
