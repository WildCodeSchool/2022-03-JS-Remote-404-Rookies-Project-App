import React from "react";
import { useNavigate } from "react-router-dom";

function UserList({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full">
      <p className="text-gray-400">
        {user.firstname} {user.lastname}
      </p>
      <p className="text-gray-400">{user.email}</p>
      <p className="text-gray-400">
        {user.is_admin === 0 ? "Admin" : "Not admin"}
      </p>
      <button type="button" className="pl-10" onClick={() => navigate("/team")}>
        <p className="text-gray-400">&bull;&bull;&bull;</p>
      </button>
    </div>
  );
}

export default UserList;
