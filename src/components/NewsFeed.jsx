import React, { useState } from "react";

//React Query imports
import { NewsQuery } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

import "./cssFiles/rightNewsBar.css";
import "../App.css";
import Box from "@mui/material/Box";
import { postData } from "../PostSeedData";
import PostCard from "./PostCard.jsx";
import CreatePostCard from "./CreatePostCard";

import "./cssFiles/newsfeed.css";

function NewsFeed() {
  //React Query hook
  // const { isLoading, data, isError } = useQuery(
  //   ["topheadlines", country], //[key(Ownself name it), props]
  //   () => NewsQuery(country) //function you want to use from Queries.js
  // );

  // if (isLoading) {
  //   return (
  //     <div className="rightNewsBar">
  //       <Box bgcolor="white">
  //         <div>is Loading</div>
  //       </Box>
  //     </div>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <div className="rightNewsBar">
  //       <Box bgcolor="white">
  //         <div>Error Loading News Headlines</div>
  //       </Box>
  //     </div>
  //   );
  // }
  // const { articles } = data.data;
  return (
    <div className="newsfeed">
      <Box bgcolor="transparent">
        <div className="newsfeedscroll">
          <CreatePostCard />
          <hr />
          {postData.map((posts) => {
            return <PostCard key={postData.indexOf(posts)} content={posts} />;
          })}
        </div>
      </Box>
    </div>
  );
}

export default NewsFeed;
