import React from "react";
import FollowedIdeas from "./FollowedIdeas";
import FollowedPosts from "./FollowedPosts";
import MediaFollowings from "./MediaFollowings";
import ProgressingIdeas from "./ProgressingIdeas";

import "../App.css"; 

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function LeftNavBar() {
  return (
    <Box bgcolor="grey" sx={{ display: "flex", width: 300, m: 2 }}>
      <div>
        <Button sx={{ m: 2 }} variant="contained">
          Save a new idea
        </Button>
        <br />
        <Button sx={{ m: 2 }} variant="contained">
          Founders Circle Link
        </Button>
        <MediaFollowings />
        <ProgressingIdeas />
        <FollowedPosts />
        <FollowedIdeas />
      </div>
    </Box>
  );
}

export default LeftNavBar;
