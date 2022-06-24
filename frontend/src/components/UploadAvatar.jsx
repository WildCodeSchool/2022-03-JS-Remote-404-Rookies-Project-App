/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function UploadAvatar() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState();
  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(data.file[0]);
    formData.append("myfile", data.file[0]);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => setImage(data.url))
      .then(() => console.log(image))

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("file")} type="file" />
        <button type="submit">Submit</button>
      </form>
      <p>{image && image.msg}</p>
      <img src={image && image.url} alt="En attente " />
    </div>
  );
}

export default UploadAvatar;
