import { useContext } from "react";
import ExportContextUser from "../../contexts/UserContext";

import plusLogo from "../../assets/pictures/add.png";

import DashboardButton from "./DashboardButton";

function MyProjects() {
  const { user } = useContext(ExportContextUser.UserContext);
  const entity = user.entity_category_id && "/submission";

  return (
    <div className="flex flex-col mx-10 my-5 h-full rounded-2xl shadow-md border">
      <div className="flex justify-between">
        <h2 className="text-emerald-700 m-5">Mes projets</h2>

        <DashboardButton
          action={{
            logo: plusLogo,
            text: "Ajouter",
            link: entity,
          }}
        />
      </div>
    </div>
  );
}

export default MyProjects;
