import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";

//React Query imports
import { PostsQuery } from "../Queries.js";
import { getUserIdeas } from "../Queries.js";
import { useQuery } from "@tanstack/react-query";

import "./cssFiles/rightNewsBar.css";
import "../App.css";
import Box from "@mui/material/Box";
// import { postData } from "../PostSeedData";
import PostCardTextOnly from "./PostCardTextOnly.jsx";
import PostCardWithImg from "./PostCardWithImg";
import PostCardWithVideo from "./PostCardWithVideo";
import PostCardWithVideoImage from "./PostCardWithVideoImage";
import PostCardIdeas from "./PostCardIdeas";
// import CreatePostCard from "./CreatePostCard";

import "./cssFiles/newsfeed.css";
import FollowedItems from "./FollowedItems.jsx";

function IdeasFeed(props) {
  //React Query hook
  const [followedItems, setFollowedItems] = useState(null);
  const { isLoading, data, isError } = useQuery(
    ["followedIdea", props], //[key(Ownself name it), props]
    (props) => getUserIdeas(props) //function you want to use from Queries.js
  );
  useEffect(() => {
    if (data !== null && data !== undefined) {
      setFollowedItems(Object.values(data));
    }
  }, [data]);
  if (isLoading) {
    return <div>is Loading</div>;
  } else if (isError) {
    return <div>Error Loading</div>;
  }

  if (followedItems !== null) {
    console.log(followedItems);
    return (
      <div>
        <h1 style={{ marginLeft: 10 }}>My Ideas</h1>
        {followedItems.map((item) => {
          console.log(item.id);
          return (
              <FollowedItems
                key={item.id}
                name={item.UserId}
                img={item.IdeaProfileImgURL}
                extra={item.IdeaName}
              />
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default IdeasFeed;
