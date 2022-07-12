import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CompanyProjectOverview from "../components/forms/CompanyProjectOverview";
import SchoolProjectOverview from "../components/forms/SchoolProjectOverview";

function Share() {
  const params = useParams();

  const [user, setUser] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/${params.type}/${params.id}`)
      .then((res) => {
        setProject(res.data);
        axios
          .get(
            `${import.meta.env.VITE_BACKEND_URL}/users/${res.data.profiles_id}`
          )
          .then((response) => setUser(response.data))
          .catch((err) => console.warn(err));
      })
      .catch((err) => console.warn(err));
  }, [params]);

  return (
    <div className="bg-gray-100 rounded-md flex flex-col w-full items-center">
      <div className="w-full">
        {user && params.type === "company-projects" && (
          <CompanyProjectOverview user={user} project={project} />
        )}
        {user && params.type === "school-ressources" && (
          <SchoolProjectOverview user={user} project={project} />
        )}
      </div>
    </div>
  );
}

export default Share;
