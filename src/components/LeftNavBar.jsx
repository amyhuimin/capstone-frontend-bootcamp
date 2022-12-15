import React from "react";
import FollowedIdeas from "./FollowedIdeas";
import FollowedPosts from "./FollowedPosts";
import MediaFollowings from "./MediaFollowings";
import ProgressingIdeas from "./ProgressingIdeas";
import "./cssFiles/LeftNavBar.css";

import "../App.css";

// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ButtonGroup } from "@mui/material";
import NewIdeaForm from "./NewIdeaForm";


function LeftNavBar() {
  return (
    <div className="leftNavBar">
      <Box bgcolor="white" style={{ borderRadius: 2, width: "100%" }}>
        <div className="ActionsBtn">
          <ButtonGroup>
            <NewIdeaForm/>
            <br />
            
            {/* <Button
              sx={{ backgroundColor: "#FFCE35", color: "black" }}
              variant="outlined"
            >
              Founders Circle Link
            </Button> */}
          </ButtonGroup>
        </div>
        <div className="leftNavScroll">
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
