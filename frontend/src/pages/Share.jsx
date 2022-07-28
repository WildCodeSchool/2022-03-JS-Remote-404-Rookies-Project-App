import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import CompanyProjectShare from "../components/forms/CompanyProjectShare";
import SchoolProjectShare from "../components/forms/SchoolProjectShare";

function Share() {
  const params = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/${params.type}/${params.id}`)
      .then((res) => {
        axios
          .get(
            `${import.meta.env.VITE_BACKEND_URL}/users/${res.data.profiles_id}`
          )
          .then((response) => {
            setUser(response.data);
            axios
              .get(
                `${import.meta.env.VITE_BACKEND_URL}/${
                  response.data.company_id ? "companies" : "schools"
                }/${
                  response.data.company_id
                    ? response.data.company_id
                    : response.data.school_id
                }`
              )
              .then((ent) => {
                setProject({ ...res.data, ...ent.data });
              })
              .catch((err) => console.warn(err));
          })
          .catch((err) => console.warn(err));
      })
      .catch((err) => console.warn(err));
  }, [params]);

  return (
    <div className="bg-gray-100 rounded-md flex flex-col w-full items-center">
      <div className="bg-emerald-700 h-30 w-full flex justify-between mb-20 items-center">
        <div className="flex text-white p-10 font-bold text-3xl">
          <div className="bg-green-400 px-3 py-1 rounded-lg">R</div>
          <h1 className="px-3 py-1">Project</h1>
        </div>
        <div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-white/50 text-white py-2 px-4 rounded-lg mx-10 hover:bg-white/20"
          >
            Créer un compte
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="bg-white/50 text-white py-2 px-4 rounded-lg mx-10 hover:bg-white/20"
          >
            Se connecter
          </button>
        </div>
      </div>
      <div className="w-1/2 mb-20">
        {project && params.type === "company-projects" && (
          <CompanyProjectShare user={user} project={project} />
        )}
        {project && params.type === "school-ressources" && (
          <SchoolProjectShare user={user} project={project} />
        )}
      </div>
    </div>
  );
}

export default Share;
