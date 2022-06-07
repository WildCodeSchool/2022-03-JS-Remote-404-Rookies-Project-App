import { Outlet } from "react-router-dom";

import React from "react";

import SidePanel from "../SidePanel";

function ConnexionLayout() {
  return (
    <div className="flex w-full  ">
      <SidePanel />
      <Outlet />
    </div>
  );
}
export default ConnexionLayout;
