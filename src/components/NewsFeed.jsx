import React, { useState } from "react";

//React Query imports
import { PostsQuery } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

import "./cssFiles/rightNewsBar.css";
import "../App.css";
import Box from "@mui/material/Box";
import { postData } from "../PostSeedData";
import PostCardTextOnly from "./PostCardTextOnly.jsx";
import PostCardWithImg from "./PostCardWithImg";
import PostCardWithVideo from "./PostCardWithVideo";
import PostCardWithVideoImage from "./PostCardWithVideoImage";
import PostCardIdeas from "./PostCardIdeas";
import CreatePostCard from "./CreatePostCard";
import "./cssFiles/newsfeed.css";

function NewsFeed() {
  //React Query hook
  const { isLoading, data, isError } = useQuery(
    ["posts"], //[key(Ownself name it), props]
    () => PostsQuery() //function you want to use from Queries.js
  );

  if (!isLoading && !isError) {
    console.log(data);

    /*     const cardsRender = () => {
      if (
        postData.text == true &&
        postData.imgURL === null &&
        postData.videoUrl === null
      ) {
        <postCardTextOnly />;
      } else if (
        postData.text == true &&
        postData.imgURL == true &&
        postData.videoUrl == null
      ) {
        <PostCardWithImg />;
      }
    }; */

    return (
      <div className="newsfeed">
        <Box bgcolor="transparent">
          <div className="newsfeedscroll">
            <CreatePostCard />
            {data.data.map((posts) => {
              return (
                <PostCardTextOnly
                  key={postData.indexOf(posts)}
                  content={posts}
                />
              );
            })}
          </div>
        </Box>
      </div>
    );
  }
}

export default NewsFeed;
