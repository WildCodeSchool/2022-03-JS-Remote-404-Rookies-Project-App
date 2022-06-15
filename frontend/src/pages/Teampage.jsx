import React, { useContext } from "react";

import ExportContextUser from "../contexts/UserContext";

import Mycompany from "../components/forms/Mycompany";
import MySchool from "../components/forms/MySchool";

function Teampage() {
  const { user } = useContext(ExportContextUser.UserContext);

  return user.entity_category_id === 2 ? <MySchool /> : <Mycompany />;
}

export default Teampage;
