import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PostRequestList(props) {
  /*  const [request, setRequest] = React.useState(""); */

  const handleChange = (event) => {
    props.handleRequestChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "30%" }}>
        <Select
          value={props.inputRequest}
          onChange={handleChange}
          displayEmpty
          required
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "13vw" }}
        >
          <MenuItem value="">
            <em>Request</em>
          </MenuItem>
          <MenuItem value="Asking for Comments">Asking for comments</MenuItem>
          <MenuItem value="Help needed">Help needed</MenuItem>
          <MenuItem value="What do you think?">What do you think?</MenuItem>
          <MenuItem value="What can be done better?">
            What can be done better?
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
