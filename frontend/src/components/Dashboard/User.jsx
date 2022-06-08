import React from "react";

import modify from "../../assets/pictures/modify.png";
import userLogo from "../../assets/pictures/user-logo.png";
import mailLogo from "../../assets/pictures/mail-logo.png";

import blankPic from "../../assets/pictures/blank-profile-picture.png";

import DashboardButton from "./DashboardButton";

function User({ user }) {
  return (
    <div className="flex flex-col mx-10 my-5 h-32 rounded-2xl shadow-md border">
      <div className="bg-gray-300 h-14 rounded-t-2xl flex justify-end">
        <DashboardButton
          action={{ logo: modify, text: "Modifier", link: "/profile" }}
        />
      </div>
      <div className="flex -mt-12 items-center">
        <img
          src={user.photo ? user.photo : blankPic}
          alt="user-profile-pic"
          className="w-24 rounded-full border-8 border-white ml-10"
        />
        <div>
          <p className="pl-5 pb-2 font-bold text-emerald-700">
            {user.firstname} {user.lastname}
          </p>
          <div className="flex">
            {user.role && (
              <div className="flex pl-5 items-center">
                <img src={userLogo} alt="user-logo" className="max-h-5" />
                <p className="pl-2 text-gray-400">{user.role}</p>
              </div>
            )}
            <div className="flex pl-5 items-center">
              <img src={mailLogo} alt="mail-logo" className="max-h-4" />
              <p className="pl-2 text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
