import { useState, useEffect, useContext } from "react";
import axios from "axios";

import ExportContextUser from "../../contexts/UserContext";

import plusLogo from "../../assets/pictures/add.png";
import sortDown from "../../assets/pictures/sort-down.png";

import DashboardButton from "./DashboardButton";
import ProjectList from "./ProjectList";

function MyProjects() {
  const { user } = useContext(ExportContextUser.UserContext);
  const [projects, setProjects] = useState();
  const [filtered, setFiltered] = useState(true);
  const entity = user.entity_category_id && "/submission";

  const getProjects = () => {
    if (user.company_id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/company-projects/company/${
            user.company_id
          }`
        )
        .then((res) => setProjects(res.data))
        .catch((err) => console.warn(err));
    } else if (user.school_id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/school-ressources/school/${
            user.school_id
          }`
        )
        .then((res) => setProjects(res.data))
        .catch((err) => console.warn(err));
    }
  };

  const handleFilter = (status) => {
    setFiltered(!status);
    if (status)
      setProjects(
        projects.filter(
          (project) => parseInt(user.id, 10) === project.profiles_id
        )
      );
    else getProjects();
  };

  useEffect(() => {
    getProjects();
  }, [user]);

  return (
    <div className="mx-10 my-5 h-full rounded-2xl shadow-md border">
      <div className="absolute right-10">
        <DashboardButton
          action={{
            logo: plusLogo,
            text: "Ajouter",
            link: entity,
          }}
        />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-emerald-700 m-5 text-xl flex">
          Projets
          <button
            type="button"
            className="pl-10"
            onClick={() => handleFilter(filtered)}
          >
            <img src={sortDown} alt="filter logo" />
          </button>
          <p className="text-xs text-gray-400 self-center pl-2">
            {filtered ? "Tous les projets" : "Mes projets"}
          </p>
        </h2>
        <div className="flex flex-col px-10 w-full">
          {projects ? (
            projects.map((project) => (
              <ProjectList key={project.id} project={project} />
            ))
          ) : (
            <p className="text-gray-500">Aucun project en cours</p>
          )}
        </div>
        <p className="text-xs text-gray-400 absolute bottom-0 m-10">
          Showing {projects && projects.length} from{" "}
          {projects && projects.length} data
        </p>
      </div>
    </div>
  );
}

export default MyProjects;
