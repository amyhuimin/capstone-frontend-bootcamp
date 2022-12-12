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
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Request</em>
          </MenuItem>
          <MenuItem value="Comments">Asking for comments</MenuItem>
          <MenuItem value="Help">Help needed</MenuItem>
          <MenuItem value="Opinions">What do you think?</MenuItem>
          <MenuItem value="Best Practice">What can be done better?</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
