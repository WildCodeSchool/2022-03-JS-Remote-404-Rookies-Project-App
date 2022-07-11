import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-layout h-100">
      <Logo />
      <div className="menu-items">
        <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/pictures/home_active.png') no-repeat 20% ",
                    backgroundColor: "white",
                  }
                : {
                    background:
                      "url('./src/assets/pictures/homeform.png')no-repeat 20%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="projets"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/pictures/folder_fill_active.png') no-repeat 20% ",
                    backgroundColor: "white",
                  }
                : {
                    background:
                      "url('./src/assets/pictures/folder_fill.png')no-repeat 20%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Mes Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/pictures/user_active.png') no-repeat 20% ",
                    backgroundColor: "white",
                  }
                : {
                    background:
                      "url('./src/assets/pictures/user.png')no-repeat 20%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Mon profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="team"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            style={({ isActive }) =>
              isActive
                ? {
                    background:
                      "url('./src/assets/pictures/user_active.png') no-repeat 20% ",
                    backgroundColor: "white",
                  }
                : {
                    background:
                      "url('./src/assets/pictures/user.png')no-repeat 20%",
                    backgroundColor: "#14705a",
                  }
            }
          >
            Mon équipe
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
