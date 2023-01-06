import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ideaData } from "../IdeaSeedData.js";
import { useQuery } from "@tanstack/react-query";
import { getUserIdeas } from "../Queries.js";

export default function PostIdeaList(props) {
  const { data } = useQuery(["ideaList"], () => getUserIdeas());

  const handleChange = (event) => {
    props.handleIdeaChange(event.target.value);
  };

  console.log("ideaData", ideaData);
  console.log("idea", data);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "65%" }}>
        <Select
          value={props.inputIdea}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "300px" }}
        >
          <MenuItem value="">
            <em>Which idea are you posting for</em>
          </MenuItem>
          {ideaData.map((item) => {
            return (
              <MenuItem key={item.Id} value={item.ideaName}>
                {item.ideaName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
