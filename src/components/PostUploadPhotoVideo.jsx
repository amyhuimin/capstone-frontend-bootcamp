import React from "react";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function PostUploadPhotoVideo(props) {
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    props.handleUploadChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
}
