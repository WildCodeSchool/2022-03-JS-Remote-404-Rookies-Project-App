import React, { useContext } from "react";

import ExportContextUser from "../../contexts/UserContext";

import logout from "../../assets/pictures/logout.svg";
import randompic from "../../assets/pictures/blank-profile-picture.png";

function UserSettings() {
  const { user } = useContext(ExportContextUser.UserContext);

  return (
    <div className="flex items-center">
      <button type="submit" onClick={() => window.location.reload()}>
        <img className="mr-5 " src={logout} alt={logout} width="30px" />
      </button>
      <p className="mr-5 text-emerald-700 font-semibold">
        {user.firstname} {user.lastname}
      </p>
      <img
        className="w-12 rounded-full"
        width="30px"
        src={
          user.image_url
            ? `${import.meta.env.VITE_BACKEND_URL}${user.image_url}`
            : randompic
        }
        alt="user avatar"
      />
    </div>
  );
}

export default UserSettings;
