import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//React Query imports
import { PostsQuery } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

import "./cssFiles/rightNewsBar.css";
import "../App.css";
import Box from "@mui/material/Box";
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

  const { user } = useAuth0();

  if (!isLoading && !isError) {
    const reversedData = data.data.reverse();
    return (
      <div className="newsfeed">
        <Box bgcolor="transparent">
          <div className="newsfeedscroll">
            {user !== undefined ? <CreatePostCard /> : <></>}
            {reversedData.map((post) => {
              if (post.RequestType == null) {
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
