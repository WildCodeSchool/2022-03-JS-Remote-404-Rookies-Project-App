import React from "react";

function StepForm({ selected, label, labelImages }) {
  return (
    <div className={`stepblock${selected ? " selected" : ""}`}>
      <div className="circlewrapper">
        <div className="steps">{label}</div>
        <div className="circle">
          <img src={labelImages} alt="test" />
        </div>
      </div>
    </div>
  );
}

export default StepForm;
