import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Logout from "./Logout";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-layout h-screen">
      <Logo />
      <div className="menu-items">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/home_active.png') no-repeat 25% ",
                    backgroundColor: "white",
                  }
                : {
                    background: "url('./src/assets/Home.png')no-repeat 25%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/Folder_fill_active.png') no-repeat 25% ",
                    backgroundColor: "white",
                  }
                : {
                    background:
                      "url('./src/assets/Folder_fill.png')no-repeat 25%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Mes Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/User_active.png') no-repeat 25% ",
                    backgroundColor: "white",
                  }
                : {
                    background: "url('./src/assets/User.png')no-repeat 25%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Mon profil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/submission"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={{
              background: "url('./src/assets/Activity.png') no-repeat 25% ",
              backgroundColor: "#14705a",
            }}
          >
            <Logout />
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
