import React, { useContext } from "react";

import ExportContext from "../contexts/UserContext";

import Mycompany from "../components/forms/Mycompany";
import MySchool from "../components/forms/MySchool";

function Teampage() {
  const user = useContext(ExportContext.UserContext);

  return user.user.entity_category_id === 2 ? <MySchool /> : <Mycompany />;
}

export default Teampage;
