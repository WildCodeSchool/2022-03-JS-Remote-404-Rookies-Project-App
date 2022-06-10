import React from "react";
import { useNavigate } from "react-router-dom";

import settings1 from "../../assets/pictures/settings1.png"
import randompic from "../../assets/pictures/blank-profile-picture.png";

import users from "../../assets/dataset/users.json";


function UserSettings() {
  const user = users[2];

  const navigate = useNavigate();

  return (
    <div className="flex items-center">
    <button onClick={() => navigate("/dashboard")}>
      <img className="mr-5" src={settings1} />
    </button>
    <p className="mr-5 text-blue-900 font-semibold">{user.firstname} {user.lastname}</p>
    <img className="img2" src={user.photo ? user.photo : randompic} />
  </div>
  )
}

export default UserSettings;