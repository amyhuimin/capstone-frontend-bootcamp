import React from "react";
import FollowedIdeas from "./FollowedIdeas";
import FollowedPosts from "./FollowedPosts";
import MediaFollowings from "./MediaFollowings";
import ProgressingIdeas from "./ProgressingIdeas";
import "./cssFiles/LeftNavBar.css";

import "../App.css";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function LeftNavBar() {
  return (
    <div className="leftNavBar">
      <Box bgcolor="white">
        <div>
          <Button
            sx={{ m: 2, backgroundColor: "cyan", color: "black" }}
            variant="contained"
          >
            Save a new idea
          </Button>
          <br />
          <Button
            sx={{ m: 2, backgroundColor: "cyan", color: "black" }}
            variant="contained"
          >
            Founders Circle Link
          </Button>
          <MediaFollowings />
          <ProgressingIdeas />
          <FollowedPosts />
          <FollowedIdeas />
        </div>
      </Box>
    </div>
  );
}

export default LeftNavBar;
