import React from "react";
import settings1 from "../../assets/pictures/settings1.png"
import avatar1 from "../../assets/pictures/avatar1.png"

function UserSettings() {
  return (
    <div className="flex items-center">
    <button>
      <img className="mr-5" src={settings1} />
    </button>
    <p className="mr-5 text-blue-900 font-semibold">Albert Rookies</p>
    <img className="img2" src={avatar1} />
  </div>
  )
}

export default UserSettings;