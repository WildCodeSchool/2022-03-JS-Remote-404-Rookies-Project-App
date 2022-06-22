/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonHandler from "../ButtonHandler";
import "react-datepicker/dist/react-datepicker.css";

import ExportContextProject from "../../../contexts/ProjectContext";

const schema = yup
  .object({
    date: yup
      .date()
      .default(() => new Date())
      .required("Veuillez remplir ce champ"),
  })
  .required();

export default function NewProjectDatesClésSchool({
  currentStep,
  long,
  handleNextStep,
}) {
  const { handleProject } = useContext(ExportContextProject.ProjectContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleProject(data);
    handleNextStep("Next");
  };

  return (
    <div className="bg-gray-100 rounded-md flex flex-wrap m-2">
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <h2 className="text-base p-1">Organisez les dates clés *</h2>
        <p className="p-5 font-extralight text-s">
          Date limite de soumission du projet par l’entreprise *
        </p>
        <div className="flex p-1">
          <Controller
            control={control}
            defaultValue=""
            name="submission_date"
            render={({ field }) => (
              <DatePicker
                placeholderText="Selectionner une date"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.dateInput && <span>Ce champ est requis</span>}
        </div>
        <p className="p-5 font-extralight text-s">
          Date de lancement du projet *
        </p>
        <div className="flex p-1">
          <Controller
            control={control}
            defaultValue=""
            name="start_date"
            render={({ field }) => (
              <DatePicker
                placeholderText="Selectionner une date"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.dateInput && <span>Ce champ est requis</span>}
        </div>
        <p className="p-5 font-extralight text-s">
          Date de Clôture du projet *
        </p>
        <div className="flex p-1">
          <Controller
            control={control}
            defaultValue=""
            name="end_date"
            render={({ field }) => (
              <DatePicker
                placeholderText="Selectionner une date"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.dateInput && <span>Ce champ est requis</span>}
        </div>

        <div>
          <ButtonHandler
            handleNextStep={handleNextStep}
            currentStep={currentStep}
            long={long}
          />
        </div>
      </form>
    </div>
  );
}
