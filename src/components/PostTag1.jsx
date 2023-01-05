import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function PostTag1(props) {
  const handleChange = (event) => {
    props.handleTag1Change(event.target.value);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <FormControl sx={{ m: 1, width: "10vw" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Tag"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={props.inputTag1}
              onChange={handleChange}
            />
          </FormControl>
        </div>
      </Box>
    </div>
  );
}
