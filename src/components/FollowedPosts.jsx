import React from "react";
import { followedPosts } from "../seedData";
import FollowedItems from "./PostItems";
import { useQuery } from "@tanstack/react-query";
import { GetAPost } from "../Queries";

function CreateFollowedPosts(followedPost) {
  const { isLoading, data, isError } = useQuery(
    ["followedPost", followedPost], //[key(Ownself name it), props]
    (followedPost) => GetAPost(followedPost) //function you want to use from Queries.js
  );
  if (isLoading) {
    return <div>is Loading</div>;
  }
  if (isError) {
    return <div>Error Loading</div>;
  }
  return (
    <FollowedItems
      key={followedPost.id}
      name={followedPost.user}
      img={followedPost.imgURL}
      extra={followedPost.postText}
    />
  );
}

function FollowedPosts() {
  return (
    <div>
      <h1 style={{ marginLeft: 10 }}>Followed Posts</h1>
      {followedPosts.map(CreateFollowedPosts)}
    </div>
  );
}

export default FollowedPosts;
