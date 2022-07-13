import { Outlet } from "react-router-dom";

import React from "react";
import Navbar from "../Navbar";

function DashboardLayout() {
  return (
    <div className="flex w-screen h-full  ">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default DashboardLayout;
