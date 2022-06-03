import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardButton({ action }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="bg-green-400 text-white font-bold text-sm flex justify-around px-5 py-2 rounded-md m-4 mr-8 h-9 w-28 shadow-md z-10"
      onClick={() => navigate(action.link)}
    >
      <img src={action.logo} alt="button_logo" className="mr-3 mt-1" />{" "}
      {action.text}
    </button>
  );
}

export default DashboardButton;
