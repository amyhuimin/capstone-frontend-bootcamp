import React from "react";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "../Queries";

export default function PostUploadPhotoVideo(props) {
  const [file, setFile] = React.useState(null);
  const { isIdle, mutate } = useMutation((data) => uploadImage(data), {
    mutationKey: "PostUploadImage",
    onSuccess: (data) => passURL(data),
    retry: 3,
  });
  const handleChange = (event) => {
    setFile(event.target.files);
    if (file !== null && file !== undefined) {
      mutate(file);
    }
  };

  const passURL = (data) => {
    console.log(data);
    props.ImageSetter(data);
  };

  if (isIdle) {
    return (
      <div>
        <Button
          aria-label="upload picture"
          component="label"
          sx={{ textTransform: "none" }}
          value={props.inputUpload}
          onChange={handleChange}
        >
          <input hidden accept="image/*" type="file" />
          <PhotoLibraryIcon sx={{ color: green[300] }} />
          <span>Photos/Videos</span>
        </Button>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}
