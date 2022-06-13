import React from 'react'

import School from "../../assets/pictures/school1.png"


function MatchesInProject() {

    return (
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
    )
}


export default MatchesInProject;