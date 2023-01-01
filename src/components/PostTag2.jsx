import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function PostTag2(props) {
  const handleChange = (event) => {
    props.handleTag2Change(event.target.value);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Tag"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={props.inputTag2}
              onChange={handleChange}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Tag
            </FormHelperText>
          </FormControl>
        </div>
      </Box>
    </div>
  );
}
