import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ideaData } from "../ideaSeedData";

export default function PostIdeaList(props) {
  const handleChange = (event) => {
    props.handleIdeaChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "65%" }}>
        <Select
          value={props.inputIdea}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Which idea are you posting for</em>
          </MenuItem>
          <MenuItem value={ideaData.ideaID}>{ideaData.ideaName}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
