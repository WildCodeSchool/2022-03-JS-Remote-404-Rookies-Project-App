import React from "react";
import MyCompany from "./Mycompany";

export default function NewProjectConsultingCompany() {
  return (
    <div className="bg-gray-100 p-10 flex justify-around flex-col">
      <h2 className="text-base">Le nom de votre entreprise *</h2>
      <MyCompany />
    </div>
  );
}
