import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ideaData } from "../IdeaSeedData.js";

export default function PostIdeaList(props) {
  const [menu, setMenu] = useState();

  const handleChange = (event) => {
    setMenu(event.target.value);
    /* props.handleIdeaChange(event.target.value); */
  };

  useEffect(() => {
    props.handleIdeaChange(menu);
  }, [menu]);

  const newArray = Object.values(ideaData);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "65%" }}>
        <Select
          value={props.inputIdea}
          onChange={handleChange}
          displayEmpty
          defaultValue=""
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "300px" }}
        >
          <MenuItem value="">
            <em>Which idea are you posting for</em>
          </MenuItem>
          {newArray.map((item) => {
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
