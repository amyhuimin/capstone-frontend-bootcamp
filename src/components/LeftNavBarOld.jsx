import React, { useState } from "react";

//React Query imports
import { LeftNavQuery } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

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
  //React Query hook
  const { isLoading, data, isError } = useQuery(
    ["followedItems"], //[key(Ownself name it), props]
    () => LeftNavQuery() //function you want to use from Queries.js
  );

  if (!isLoading && !isError) {
    console.log(data);

    return (
      <div className="leftNavBar">
        <Box bgcolor="white" style={{ borderRadius: 2, width: "100%" }}>
          <div className="ActionsBtn">
            <ButtonGroup>
              <NewIdeaForm />
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
            {/* <ProgressingIdeas /> */}
            {/* <MediaFollowings /> */}
            {data.data.map((item) => {
              <ProgressingIdeas key={item.Id} content={item} />;
            })}

            <FollowedPosts />
            <FollowedIdeas />
          </div>
        </Box>
      </div>
    );
  }
}

export default LeftNavBar;
