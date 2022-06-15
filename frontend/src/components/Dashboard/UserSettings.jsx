import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ExportContextUser from "../../contexts/UserContext";

import settings1 from "../../assets/pictures/settings1.png";
import randompic from "../../assets/pictures/blank-profile-picture.png";

function UserSettings() {
  const { user } = useContext(ExportContextUser.UserContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <button type="submit" onClick={() => navigate("/dashboard")}>
        <img className="mr-5" src={settings1} alt={settings1} />
      </button>
      <p className="mr-5 text-blue-900 font-semibold">
        {user.firstname} {user.lastname}
      </p>
      <img
        className="img2"
        src={user.photo ? user.photo : randompic}
        alt={settings1}
      />
    </div>
  );
}

export default UserSettings;
