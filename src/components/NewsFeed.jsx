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
import CommentsSection from "./comments2.jsx";

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
            <CreatePostCard />

            {data.data.map((post) => {
              if (post.IdeaId != null) {
                return <PostCardIdeas key={post.Id} content={post} />;
              } else if (post.VideoURL != null && post.ImgURL === null) {
                return <PostCardWithVideo key={post.Id} content={post} />;
              } else if (post.ImgURL != null && post.VideoURL === null) {
                return <PostCardWithImg key={post.Id} content={post} />;
              } else if (post.ImgURL != null && post.VideoURL != null) {
                return <PostCardWithVideoImage key={post.Id} content={post} />;
              } else {
                return <PostCardTextOnly key={post.Id} content={post} />;
              }
            })}
          </div>
        </Box>
      </div>
    );
  }
}

export default NewsFeed;
