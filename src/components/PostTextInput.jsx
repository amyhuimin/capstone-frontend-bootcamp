import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function PostTextInput(props) {
  const handleChange = (event) => {
    props.handleTextChange(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "97%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          variant="standard"
          multiline
          placeholder="What's on your mind"
          value={props.inputText}
          rows={3}
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
