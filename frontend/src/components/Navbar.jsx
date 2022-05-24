import React from "react";
import { Link } from "react-router-dom";

import Logout from "./Logout";

function Navbar() {
  return (
    <div>
      <Link to="/dashboard" />
      <Link to="/profile" />
      <Link to="/submission" />
      <Logout />
    </div>
  );
}

export default Navbar;
