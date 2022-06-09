import React from "react";
import "../styles/Project.css";

import Line from "@assets/pictures/line.png"
import Share from "@assets/pictures/share.png"
import School from "@assets/pictures/school1.png"

function ProjectDetails() {
    return (
        <div className="h-full">
            <div className="blocproject">
                <form className="form1">
                    <select className="menu1">
                        <option className="title1">Mon projet : Etude de marché (Allemagne) </option>
                        <option className="title1">Mon projet : Etude de marché (France) </option>
                        <option className="title1">Mon projet : Etude de marché (Etats-unis) </option>
                    </select>
                </form>
                <div className="linebloc">
                    <img className="line" src={Line} alt="barre separative" />
                </div>
                <div className="bloc">
                    <div className="blocproject2">
                        <h1 className="title2">AVANCEMENT DU PROJET</h1>
                    </div>
                    <div className="blocproject3">
                        <div className="blocproject3bis">
                            <h1 className="title3">Brief du projet :</h1>
                            <div className="shareedit">
                                <button className="share"><img src={Share}></img>Partager</button>

                                <button className="edit">Modifier</button>
                            </div>
                        </div>
                        <div className="bloc6">
                        <h2 className="titleh2">L’objectif principal du projet ?</h2>
                        <p className="ph3">Fin souhaité avant le : 28/10/2022</p>
                        </div>
                        <p className="ph2">Lorseum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet. Sit omnis autem est asperiores voluptatem est ratione maiores ut veritatis voluptatem. Eum commodi accusamus et error quod eum dolores eaque qui doloremque enim sit illo dicta.</p>
                        <h3 className="titleh2">Quelles seront les ressources disponibles pour les étudiants ?</h3>
                        <p className="ph2">Et fugit soluta dolorem ratione et quia minus eum unde voluptas ad autem dolor. Non ipsam adipisci sit dolores accusamus non voluptatem enim. Qui quia tenetur et odit quia vel maiores nemo aut voluptatum tenetur et minus laboriosam.</p>
                        <h4 className="titleh2">Quel est le domaine du projet ?</h4>
                        <div className="domaineproject">
                            <p className="circlegrey">Business</p>
                            <p className="circlegrey">Marketing</p>
                            <p className="circlegrey">Etude de marché</p>
                        </div>
                        <h5 className="titleh2">L’entreprise en quelques mots</h5>
                        <p className="ph2">Ased do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex non voluptatem enim. Qui quia tenetur et odit quia vel maiores nemo aut voluptatum tenetur et minus laboriosam.</p>
                    </div>
                </div>
                <div className="blocproject4">
                    <h1 className="matches">Mes matches :</h1>
                    <div className="bloc5">
                        <div className="imgschool">
                            <img src={School}></img>
                        </div>
                        <div className="listed">
                            <p className="school">Ecole Group</p>
                            <p className="schoolbis">Patrick Ecole</p>
                        </div>
                        <h1 className="schoolid">Management International - Master Commerce International</h1>
                        <button className="edit">Voir plus</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetails;