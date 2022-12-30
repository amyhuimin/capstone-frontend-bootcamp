import React, { useState } from "react";

//React Query imports
// import { LeftNavQuery } from "../Queries.js";
// import { useQuery } from "@tanstack/react-query";

import ProgressingIdeas from "./ProgressingIdeas";
import "./cssFiles/LeftNavBar.css";
import "../App.css";

import FollowedIdeas from "./FollowedIdeas";
import FollowedPosts from "./FollowedPosts";
// import MediaFollowings from "./MediaFollowings";

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
            <NewIdeaForm />
            <br />
          </ButtonGroup>
        </div>
        <div className="leftNavScroll">
          <ProgressingIdeas />
          <FollowedPosts />
          <FollowedIdeas />
          
        </div>
      </Box>
    </div>
  );
}

export default LeftNavBar;
