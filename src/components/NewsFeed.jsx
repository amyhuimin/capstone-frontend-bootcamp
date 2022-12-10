import React, { useState } from "react";

//React Query imports
import { PostsQuery } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

import "./cssFiles/rightNewsBar.css";
import "../App.css";
import Box from "@mui/material/Box";
import { postData } from "../PostSeedData";
import PostCard from "./PostCard.jsx";
import "./cssFiles/newsfeed.css";

function NewsFeed() {
  //React Query hook
  const { isLoading, data, isError } = useQuery(
    ["posts"], //[key(Ownself name it), props]
    () => PostsQuery() //function you want to use from Queries.js
  );

  if (!isLoading && !isError) {
    console.log(data);
    return (
      <div className="newsfeed">
        <Box bgcolor="transparent">
          <div className="newsfeedscroll">
            {data.data.map((posts) => {
              return <PostCard key={postData.indexOf(posts)} content={posts} />;
            })}
          </div>
        </Box>
      </div>
    );
  }
}

export default NewsFeed;
